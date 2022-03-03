import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        backgroundColor: "#121212",
        bottom: 49,
        borderBottomWidth: 2,
        borderColor: "black",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',   
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 10
    },
    songDetails:{
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    songName:{
        color: "white",
        fontSize: 16,
        marginLeft: 10       
    },
    artist:{
        color: "darkgray",
        fontSize: 15,
        marginLeft: 10
    },
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    play:{
        marginLeft: 15
    }
})

export default styles
