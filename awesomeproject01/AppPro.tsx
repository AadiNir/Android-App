import React from 'react'
import {Text,View,SafeAreaView,StyleSheet,useColorScheme} from'react-native'
function Apppro():JSX.Element{
    const isdark = useColorScheme()==='dark';
    return(
        <View style={styles.container}>
            <Text style={isdark?styles.whiteText:styles.darkText}>Hello World</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'red',
        fontSize:45
    }
})
export default Apppro