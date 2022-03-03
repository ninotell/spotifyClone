import { FlatList, Text, View } from 'react-native';
import styles from "./styles"

import { RootTabScreenProps } from '../../types';

import AlbumItem from '../../components/AlbumItem';
import AlbumCategory from '../../components/AlbumCategory';

// Data
import albumCategories from '../../assets/data/albumCategories';
import albumDetails from '../../assets/data/albumDetails';


const HomeScreen = ({ navigation }: RootTabScreenProps<'HomeScreenNavigator'>) => {
  
  return (
    <View style={styles.container}>
        <FlatList
        data={albumCategories}
        renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums}/>}
        keyExtractor={item => item.id}
        />        
    </View>    
  );
}

export default HomeScreen;

