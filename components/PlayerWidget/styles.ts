import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: "#121212",
        bottom: 49,
        borderBottomWidth: 2,
        borderColor: "black",
        width: "100%",
        height: 60,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        height: "85%",
        aspectRatio: 1 / 1,
        borderRadius: 10
    },
    songDetails: {
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    songName: {
        color: "white",
        fontSize: 12,
        marginLeft: 10
    },
    artist: {
        color: "darkgray",
        fontSize: 11,
        marginLeft: 10,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    playPauseButton: {
        width: 24,
        marginLeft: 15
    },
    progressBar: {
        height: 2,
        backgroundColor: "white"
    }
})

export default styles

