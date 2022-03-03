import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "center",
        marginTop: 30
    },
    image:{
        width: 250,
        height: 250
    },
    name:{
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        padding: 15
    },
    creatorContainer:{
        flexDirection: "row",
        marginBottom: 15        
    },
    creator:{
        color: "white",
        marginRight: 5,
        textTransform: "uppercase"
    },
    likes:{
        color: "white"
    },
    button:{
        width: 175,
        height: 60,
        backgroundColor: "#1DB954",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    buttonText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold"
    }
})

export default styles