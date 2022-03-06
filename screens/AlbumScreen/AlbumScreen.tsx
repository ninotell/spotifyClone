import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { RootTabScreenProps } from '../../types';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import albumDetails from '../../assets/data/albumDetails';
import SongItem from '../../components/SongItem';
import AlbumHeader from '../../components/AlbumHeader';


const AlbumScreen = ({ navigation }: RootTabScreenProps<'Search'>) => {
    
    useEffect(() => {


    }, [])


    return (
        <View style={[
            styles.container,
            { backgroundColor: "black" }
        ]}>
            <FlatList
                style={styles.songList}
                data={albumDetails.songs}
                renderItem={({ item }) => <SongItem image={item.imageUri} title={item.title} artist={item.artist} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
            >
            </FlatList>
        </View>
    );
}

export default AlbumScreen;