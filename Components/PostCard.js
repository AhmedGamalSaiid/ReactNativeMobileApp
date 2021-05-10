import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function PostCard() {
    const { params } =useRoute();
    console.log(params && params.post);
    return (
        <View >
            <Text style={styles.title}>{params&&params.post.title}</Text>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://source.unsplash.com/random',
        }}
      />
      <Text>{params&&params.post.body}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        display:"flex",
        width:"100%",
        height:40,
        backgroundColor:"white",
        margin:3,
        
    },
    title:{
        fontWeight:"600",
        margin:3,
        fontSize:15,
    },
    tinyLogo: {
      
            width: "80%",
            height: 300,
            resizeMode: "cover",
            borderRadius: 50,
      },
     text: {
         margin:3,
        //capHeight: 10.496,
       // ascender: 14.624,
       // descender: 4,
        width: 28.224,
        height: 18.624,
        //xHeight: 6.048,
        // x: 0,
        // y: 0
    }
})
