import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ImageComponent from './Components/image-componet';
import TitleComponent from './Components/title-componet';
import ButtonComponent from './Components/button-componet';
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);
  const images = [
    'https://img.freepik.com/fotos-gratis/terra-e-galaxia-elementos-desta-imagem-fornecidos-pela-nasa_335224-750.jpg?w=2000',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJktFoSVG2dUtAlmJXBhEVwL5YRGuweAAfQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLR54nL_9zcB9eq2kH2LKUWAuK4_e2nVzSg&usqp=CAU'

  ];
  const ImagemTroca = () =>{
    if(index === 2){
      setIndex(0)

    }else{
      setIndex(index + 1)
    }
    

  }

  
  return (
    <View style={styles.container}>
      <TitleComponent texto='Titulo' />
      <ImageComponent imagem={images[index]} />
      <ButtonComponent buttonTroca={ImagemTroca}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },

});
