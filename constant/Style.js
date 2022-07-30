import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create( {
    containerLoading:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingVertical:60,
        backgroundColor:"#FDF6AA",

    },
    textLoading:{
        color:"#2c2c2c",
        fontSize:20
    },
    containerWeather:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    halfContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    weatherTemp:{
        fontSize: 42,
        color:'white',
    },
    title:{
        color:'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10

    },
    subtitle:{
        color:'white',
        fontSize:24,
        fontWeight: "600"
    },
    textContainer:{
        alignItems:'center',
        paddingHorizontal: 20,
    }

});