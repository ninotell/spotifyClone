import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import { RootTabScreenProps } from '../../types';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import albumDetails from '../../assets/data/albumDetails';
import SongItem from '../../components/SongItem';


const AlbumScreen = ({ navigation }: RootTabScreenProps<'Search'>) => {
    
    // const route = useRoute();
    
    // useEffect(() => {
    //     console.log(route.params);
    // }, [])
    
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>PRUEBA</Text>      
            <FlatList
            data={albumDetails.songs}
            renderItem={({item}) => <SongItem image={item.imageUri} title={item.title} artist={item.artist} />}
            keyExtractor={item => item.id}
            >

            </FlatList>
            
        </View>    
      );
}
export default AlbumScreen;