import { FlatList, Text, View } from 'react-native';
import styles from "./styles"

import { RootTabScreenProps } from '../../types';

import AlbumItem from '../../components/AlbumItem';
import AlbumCategory from '../../components/AlbumCategory';

// Data
import albumCategories from '../../assets/data/albumCategories';
import albumDetails from '../../assets/data/albumDetails';

import { listAlbumCategories } from '../../src/graphql/queries';
import { useEffect, useState } from 'react';
import GraphQLAPI from '@aws-amplify/api-graphql';
import { API, graphqlOperation } from 'aws-amplify';


const HomeScreen = ({ navigation }: RootTabScreenProps<'HomeScreenNavigator'>) => {
  const [categories, setCategories] = useState([])

  useEffect(() => { 
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories))
        setCategories(data.data.listAlbumCategories.items)
        console.log(data.data.listAlbumCategories.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlbumCategories()
  }, [])

  return (
    <View style={styles.container}>
        <FlatList
        data={categories}
        renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums.items}/>}
        keyExtractor={item => item.id}
        />        
    </View>    
  );
}

export default HomeScreen;

