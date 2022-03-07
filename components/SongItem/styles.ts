import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    image:{
        width: 53,
        aspectRatio: 1/1,
        borderRadius: 10
    },
    songDetails:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    songName:{
        color: "white",
        fontSize: 15        
    },
    artist:{
        color: "darkgray",
        fontSize: 14,
    },
})

export default styles

