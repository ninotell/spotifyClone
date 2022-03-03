import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Album } from '../../types'

export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            {/* Album image */}
            <Image style={styles.image} source={{ uri: props.album.imageUri }}></Image>
            {/* Album Title */}
            <Text style={styles.name}>{props.album.name}</Text>
            {/* Creator and Likes */}
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>BY {props.album.by}</Text>
                <Text style={styles.likes}>{props.album.numberOfLikes} LIKES</Text>
            </View>
            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
            >
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader