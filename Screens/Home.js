import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
    const {navigate}=useNavigation();
    // const handlefetch=()=>{

    // }
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={styles.btn} onPress={()=> navigate('post-list')} >
                <Text style={{color:"#6fda44",fontSize:20,fontWeight:'600'}}>Get posts</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    btn: {
    backgroundColor: "#094456",
    paddingHorizontal: 20,
    paddingVertical:10,
    justifyContent: "space-between",
    borderRadius: 20,
    }
})