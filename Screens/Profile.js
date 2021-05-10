import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require("../assets/ahmed.png")} />
        <View style={styles.card}>
          <Text style={styles.name}>Ahmed Gamal</Text>
          <Text style={styles.jTit}>Front End Developer</Text>
          <Text>
          <FontAwesome color="#6fda44"  name="phone" />
          {"   "}+20 100 707 8925
          </Text>
          <Text>
          <FontAwesome color="#6fda44"  name="envelope-open-o" />
            {"   "}ahmedgamal81995@gmail.com
          </Text>
          <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',width:70}}>
          <FontAwesome  onPress={() => Linking.openURL('https://github.com/AhmedGamalSaiid')}  size={30} color="#094456"  name="github" />
          <FontAwesome  onPress={() => Linking.openURL('https://www.linkedin.com/in/ahmed-gamal-b50970163/')}  size={30} color="#094456"  name="linkedin" />
          </View>
          <Text style={{color: '#6fda44'}}
      onPress={() => Linking.openURL('http://ahmedgamal.great-site.net/')}>
  Ahmed Portfolio Site
</Text>
        </View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //display:'flex',
    //alignItems:'center',
    //justifyContent:'center'
    marginTop:90
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#094456",
    borderRadius: 70,
    position: "relative",
    top: 30,
    zIndex: 1,
    
  },
  card: {
   
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width: 320,
    backgroundColor: "white",
    height: 350,
    shadowColor: "#094456",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //elevation: 5,
    borderRadius:50,
  },
  name:{
      fontSize: 20,
      marginTop:30,
      fontWeight:"bold",
      
      color:"#094456",
  },
  jTit:{
    fontSize: 15,
    marginTop:5,
    fontWeight:"400",
    color:"#094456",
}

});
