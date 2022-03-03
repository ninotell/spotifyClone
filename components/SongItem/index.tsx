import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export type SongItemProps = {
    image: string,
    title: string,
    artist: string,
}

const SongItem = (props: SongItemProps) => {
    const {image, title, artist} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }}></Image>
            <View style={styles.songDetails}>
                <Text style={styles.songName}>{props.title}</Text>
                <Text style={styles.artist}>{props.artist}</Text>
            </View>
        </View>
    )
}

export default SongItem
