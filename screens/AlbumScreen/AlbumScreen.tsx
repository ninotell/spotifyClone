import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { RootTabScreenProps } from '../../types';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
// import albumDetails from '../../assets/data/albumDetails';
import SongItem from '../../components/SongItem';
import AlbumHeader from '../../components/AlbumHeader';

import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../../src/graphql/queries';

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';



const AlbumScreen = () => {
    const navigation = useNavigation();
    const [album, setAlbum] = useState(null);
    const route = useRoute();
    const albumId = route.params.id;

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
                setAlbum(data.data.getAlbum)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAlbum()
    }, [])

    const back = () => {
     navigation.goBack()   
    }

    if (!album) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.textLoading}> Loading ... </Text>

            </View>

        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.arrow}
                onPress={back}
            >
                <AntDesign name="arrowleft" size={35} color="white" />
            </TouchableOpacity>
            <FlatList
                style={styles.songList}
                data={album.songs.items}
                renderItem={({ item }) => <SongItem song={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            >
            </FlatList>
        </View>
    );
}

export default AlbumScreen;