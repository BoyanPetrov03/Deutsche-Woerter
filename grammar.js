import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DerDieDas from "./DerDieDas";


export default Grammar = ({ navigation }) => {


      return (

        
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DerDieDas')}><Text style={styles.play}> Der, Die, Das </Text></TouchableOpacity>
      
        </View>
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
    },
    grammarText: {
      marginBottom: 20,
      color: "#495464",
      fontWeight: "bold",
      marginTop: "10%",
      fontSize: 18,
    },
  });