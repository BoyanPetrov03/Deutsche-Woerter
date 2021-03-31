import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from "./Game";
import Grammar from "./Grammar";
import { AdMobBanner } from "expo";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.welcome}>Добре дошли в Deutsche Wörter! Тук ще научите и оттренирате практични думи, игрейки лесна и забавна игра! Ако пък имате нужда от добре формулирана граматика на разбираем език, също сте на правилното място!</Text>
        <Text style={styles.instruction}>Можете да продължите напред, само ако изберете правилната дума. При всеки правилен отговор получавате по 1 точка, а при всеки грешен ви се отнема по 1. Можете ли да стигнете до 100?</Text>
        <Text style = {styles.instruction}>За играта трябва интернет!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Игра на думи')}><Text style={styles.play}> Започни игра! </Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Граматика')}><Text style={styles.play}> Започни да учиш граматика! </Text></TouchableOpacity>
    </View>
  );}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      textAlign: "center",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#bbbfca",
      padding: 10,
      marginTop: "5%",
    },
    play: {
      color: "#ffe05d",
      fontWeight: "bold",
    },
    welcome: {
      marginBottom: 20,
      color: "#495464",
      fontWeight: "bold",
      marginTop: "10%",
      fontSize: 18,
      textAlign: 'center',
    },
    instruction: {
      color: "#495464",
      fontWeight: "bold",
      fontSize: 18,
      textAlign: 'center',
    },
    bottomBanner: {
      position: "absolute",
      bottom: 0
    },
  
  });


  {/* const [isPlaying, setPlaying] = useState(false); 
  const [isLearningGrammar, setLearningGrammar] = useState(false);

  const handlePressGame = () => {
    setPlaying(true);
    console.log("PRESSED!");
  }

  function handlePressGrammar() {
    setLearningGrammar(true);
    console.log("Tried to start learning grammar!");
  }

  if (isPlaying === false || isLearningGrammar === false){
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Добре дошли в Deutsche Wörter! Тук ще научите и оттренирате практични думи, игрейки лесна и забавна игра!</Text>
        <Text style={styles.instruction}>Можете да продължите напред, само ако изберете правилната дума. При всеки правилен отговор получавате по 1 точка, а при всеки грешен ви се отнема по 1. Можете ли да стигнете до 100?</Text>

        <TouchableOpacity style={styles.button} onPress={handlePressGame}><Text style={styles.play}>ЗАПОЧНИ ДА ИГРАЕШ!</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePressGrammar}><Text style={styles.play}>ЗАПОЧНИ ДА ЧЕТЕШ!</Text></TouchableOpacity>


      </View>   
     )
  }
  else if (isPlaying === true) {
    return (
      <Game />
    )
  }
  else if (isLearningGrammar === true) {
    return (
      <Grammar />
    )
    
  } */}