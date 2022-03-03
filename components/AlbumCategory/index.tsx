import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import AlbumItem from '../AlbumItem'
import { Album } from '../../types'
import albumDetails from '../../assets/data/albumDetails'

export type AlbumCategoryProps = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{props.title}</Text>
      <FlatList
      data={props.albums}
      renderItem={({item}) => <AlbumItem album={item}/>}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
            
    </View>
  )
}

export default AlbumCategory