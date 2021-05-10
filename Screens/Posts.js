import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/core'


export default function Posts() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  const { navigate } =useNavigation();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
//   const handleData=()=>{console.log("aa");}
  return (
    <View
      style={{ height: 500, display: "flex", justifyContent: "space-around" }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        // renderItem={({item})=>{console.log(item.title)}}
        renderItem={({ item }) => (
          <View style={styles.card} >
            <Text onPress={()=>navigate('post-det',{post:item})} style={styles.title}>{item.title}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://source.unsplash.com/random",
              }}
            />
            <Text style={styles.text}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    margin: 3,
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    margin: 3,
    fontSize: 30,
    // capHeight: 10.496,
    // ascender: 14.624,
    // descender: 4,
    // height: 18.624,
  },
  tinyLogo: {
    width: "80%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 50,
  },
  text: {
    // capHeight: 10.496,
    // ascender: 14.624,
    // descender: 4,
    // width: 28.224,
    // height: 18.624,
    // xHeight: 6.048,
    // x: 0,
    // y: 0
  },
});
