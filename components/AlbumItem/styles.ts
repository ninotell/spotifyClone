import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: "flex-start",
        alignItems:"flex-start",
        width: 190,
        marginHorizontal: 15
    },
    image:{
        width: "100%",
        aspectRatio: 1/1,
        borderRadius: 10
    },
    albumsNames:{
        marginTop: 5,
        color: "white", 
        fontSize: 14       
    },
    albumName:{
        marginTop: 5,
        color: "white", 
        fontSize: 15,
        width: "100%",
        textAlign: "center"
        
    }
})

export default styles