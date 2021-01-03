import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default Grammar = () => {

    useEffect(() => {
        getObjects().then((response) => {
    
          setRes(response.slice());
          setRes2(response.slice());
    
    
        })
      }, []);

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

      return (

      );
}

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