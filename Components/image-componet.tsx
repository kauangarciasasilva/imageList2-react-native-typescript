import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface Props {

  imagem: string;
} 

export default function ImageComponent(props:Props) {

  return (
    <View style={styles.ImageMargin}>
      <Image  source={{ uri: props.imagem }} style={styles.Imagem} />
    </View>
  );
};


const styles = StyleSheet.create({
    Imagem: {
        borderRadius:25,
        width: 350, 
        height: 200,
        padding:20, 
      
    },
    ImageMargin:{
        
        height: 400,
    }
  });