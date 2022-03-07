import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Song } from '../../types'
import { Entypo } from '@expo/vector-icons';

export type SongItemProps = {
    song: Song;
}

const SongItem = (props: SongItemProps) => {
    const { song } = props;
    return (
        <View style={styles.container}
            onPress={() => console.log(props.song.uri)}
        >
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={{ uri: props.song.imageUri }}></Image>
                <View style={styles.songDetails}>
                    <Text numberOfLines={1} style={styles.songName}>{props.song.title}</Text>
                    <Text numberOfLines={1} style={styles.artist}>{props.song.artist}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={22} color="darkgray" />
            </TouchableOpacity>

        </View>
    )
}

export default SongItem
