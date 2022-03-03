import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons';



const song = {
    id: '4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <View style={styles.songDetails}>
                <Image style={styles.image} source={{ uri: song.imageUri }}></Image>
                <Text style={styles.songName}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <AntDesign name="hearto" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome style={styles.play} name="play" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PlayerWidget
