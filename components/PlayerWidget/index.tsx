import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const song = {
    id: '4',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound|null>(null)
    const [like, setLike] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<number | null>(null);
    const [songPosition, setSongPosition] = useState<number | null>(null);



    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis)
        setSongPosition(status.positionMillis)
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

    const getProgress = () => {
        if (sound === null || duration === null || songPosition === null) {
            return 0
        } else {
            return (((songPosition / duration) * 100) + "%")
        }
    }

    useEffect(() => {
        playCurrentSong()
    }, [])

    return (
        <View style={styles.container}>
            <View style={[
                    styles.progressBar,
                    {width: getProgress()}
                    ]}></View>
            <View style={styles.containerDetails}>
                <View style={styles.songDetails}>
                    <Image style={styles.image} source={{ uri: song.imageUri }}></Image>
                    <Text style={styles.songName}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={onLikePress}
                    >
                        <AntDesign name={like ? "heart" : "hearto"} size={24} color={like ? "#1DB954" : "white"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPlayPausePress}
                    >
                        <FontAwesome style={styles.playPauseButton} name={isPlaying ? "pause" : "play"} size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget
