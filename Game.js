import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default Game = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [wordBG, setWordBG] = useState("");
    const [wordDE1, setWordDE1] = useState("");
    const [wordDE2, setWordDE2] = useState("");
    const [wordDE3, setWordDE3] = useState("");
    const [res, setRes] = useState({});
    const [res2, setRes2] = useState({});
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      getObjects().then((response) => {
  
        setRes(response.slice());
        setRes2(response.slice());
  
        if (response) {
          setSequence(response);
  
        }
  
      })
    }, []);
  
    setSequence = (res) => {
  
  
        let selectorbg = Math.floor(Math.random() * res.length);
  
        setWordBG(res[selectorbg].title);
        setWordDE1(res[selectorbg].words);
        res.splice(selectorbg, 1);
  
        let selectorde1 = Math.floor(Math.random() * res.length);
        setWordDE2(res[selectorde1].words);
        res.splice(selectorde1, 1);
  
        let selectorde2 = Math.floor(Math.random() * res.length);
        setWordDE3(res[selectorde2].words);
        res.splice(selectorde2, 1);
  
    }
  
    getObjects = async () => {
      try {
        const response = await fetch(
          'https://german-words.000webhostapp.com/wp-json/wp/v1/words'
        )
        if (response.status === 200) {
          const json = await response.json()
          return json
        }
      } catch (error) {
        console.error(error)
      }
      return false
    }
  
  
  
    onPress = (choice) => {
      
      
      if(choice === wordDE1) {
  
        let selectorbg = Math.floor(Math.random() * res.length);
  
        setWordBG(res[selectorbg].title);
        setWordDE1(res[selectorbg].words);
        res.splice(selectorbg, 1);
  
        let selectorde1 = Math.floor(Math.random() * res.length);
        setWordDE2(res[selectorde1].words);
        res.splice(selectorde1, 1);
  
        let selectorde2 = Math.floor(Math.random() * res.length);
        setWordDE3(res[selectorde2].words);
        res.splice(selectorde2, 1);
        
        
        setRes(res2.slice());
  
        setScore( score + 1);
      }
      else{
        console.log("wrong");
        setScore (score - 1);
      }
    }
   
    
    let arrangmentSelector = Math.floor((Math.random() * 3) + 1);
  
    if(arrangmentSelector === 1) {
      return (
        
        <View style={styles.container}>
          <Text style={styles.score}>Твоят резултат: {score}</Text>

          <Text style={styles.word}>{wordBG}</Text>
    
      <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE1)}><Text style={styles.germanWord}>{wordDE1}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE2)}><Text style={styles.germanWord}>{wordDE2}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE3)}><Text style={styles.germanWord}>{wordDE3}</Text></TouchableOpacity>
      
      
        </View>
      );
    }
    else if(arrangmentSelector === 2) {
      return (
        <View style={styles.container}>
          <Text style={styles.score}>Твоят резултат: {score}</Text>

          <Text style={styles.word}>{wordBG}</Text>
    
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE2)}><Text style={styles.germanWord}>{wordDE2}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE1)}><Text style={styles.germanWord}>{wordDE1}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE3)}><Text style={styles.germanWord}>{wordDE3}</Text></TouchableOpacity>
  
        </View>
      );
    }
    else if(arrangmentSelector === 3) {
      return (
        <View style={styles.container}>
          <Text style={styles.score}>Твоят резултат: {score}</Text>

          <Text style={styles.word}>{wordBG}</Text>
    
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE3)}><Text style={styles.germanWord}>{wordDE3}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE2)}><Text style={styles.germanWord}>{wordDE2}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onPress(wordDE1)}><Text style={styles.germanWord}>{wordDE1}</Text></TouchableOpacity>
  
        </View>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      backgroundColor: "#f6f6f6"
    },
    button: {
      alignItems: "center",
      backgroundColor: "#bbbfca",
      padding: 10,
      margin: 5,
    },
    germanWord: {
      color: "#ffe05d",
      fontWeight: "bold",
    },
    word: {
      textAlign: "center",
      padding: 10,
      fontSize: 30,
      color: "#495464",
      fontWeight: "bold"
    },
    tip: {
      textAlign: "center",
      marginTop: 20,
      color: "#495464"
    },
    instruction: {
      textAlign: "center",
      marginBottom: 30,
      color: "#495464"
    },
    score: {
      position: "absolute",
      left: "6%",
      right: 0,
      bottom: 150,
      fontSize: 40,
    }
  });