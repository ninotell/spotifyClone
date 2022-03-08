import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import { Song } from '../../types'
import { Entypo } from '@expo/vector-icons';
import { ConsoleLogger } from '@aws-amplify/core';
import { AppContext } from '../../AppContext';

export type SongItemProps = {
    song: Song;
}

const SongItem = (props: SongItemProps) => {
    const { song } = props;
    const {setSongId} = useContext(AppContext);

    const onPress = () => {
        setSongId(props.song.id)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
             style={{ flexDirection: 'row' }}
             onPress={onPress}>
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
