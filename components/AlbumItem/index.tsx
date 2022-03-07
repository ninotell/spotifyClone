import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Album } from '../../types'
import { useNavigation } from '@react-navigation/native'


export type AlbumProps = {
  album: Album
}

const AlbumItem = (props: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", props.album);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Image style={styles.image} source={{ uri: props.album.imageUri }}></Image>
      </TouchableOpacity>
      <Text style={styles.albumName} numberOfLines={2} >{props.album.name}</Text>
      <Text style={styles.artistHeadline} numberOfLines={2} >{props.album.artistsHeadline}</Text>

    </View>
  )
}

export default AlbumItem
