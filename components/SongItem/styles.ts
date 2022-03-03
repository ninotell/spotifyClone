import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: 25,
        marginTop: 15
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 10
    },
    songDetails:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    songName:{
        color: "white",
        fontSize: 16        
    },
    artist:{
        color: "darkgray",
        fontSize: 15
    },
})

export default styles

