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
    artistHeadline:{
        marginTop: 5,
        color: "darkgray", 
        fontSize: 14       
    },
    albumName:{
        marginTop: 5,
        color: "white", 
        fontSize: 16,
        fontWeight: "bold"
        
    }
})

export default styles