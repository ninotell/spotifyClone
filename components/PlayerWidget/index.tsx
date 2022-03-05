import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const song = {
    id: '4',
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound | null>(null)
    const [like, setLike] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false)


    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync()
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        );
        setSound(newSound)
    }

    const onPlayPausePress = async () => {
        if (!sound) {
            return
        } else {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
        }
    }

    const onLikePress = () => {
        if (like) {
            setLike(false)
        } else {
            setLike(true)
        }
    }

    useEffect(() => {
        playCurrentSong()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.songDetails}>
                <Image style={styles.image} source={{ uri: song.imageUri }}></Image>
                <Text style={styles.songName}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={onLikePress}
                >
                    <AntDesign name={like ? "heart" : "hearto"} size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPlayPausePress}
                >
                    <FontAwesome style={styles.playPauseButton} name={isPlaying ? "pause" : "play"} size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PlayerWidget
