import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Game from "./Game";

export default App = () => {

  const [isPlaying, setPlaying] = useState(false); 

  const handlePress = () => {
    setPlaying(true);
    console.log("PRESSED!");
  }

  if (isPlaying === false){
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Добре дошли в Deutsche Wörter! Тук ще научите и оттренирате практични думи, игрейки лесна и забавна игра!</Text>
        <Text style={styles.instruction}>Можете да продължите напред, само ако изберете правилната дума. При всеки правилен отговор получавате по 1 точка, а при всеки грешен ви се отнема по 1. Можете ли да стигнете до 100?</Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}><Text style={styles.play}>ЗАПОЧНИ ДА УЧИШ!</Text></TouchableOpacity>

      </View>   
     )
  }
  else if (isPlaying === true) {
    return (
      <Game />
    )
  }

};


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
  },
  instruction: {
    color: "#495464",
    fontWeight: "bold",
    fontSize: 18,
  }

});