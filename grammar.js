import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default Grammar = ({ navigation }) => {
  
      return (

        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Der Die Das')}><Text style={styles.play}> Der, Die, Das </Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nominativ')}><Text style={styles.play}> Nominativ </Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Akkusativ')}><Text style={styles.play}> Akkusativ </Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dativ')}><Text style={styles.play}> Dativ </Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Genetiv')}><Text style={styles.play}> Genetiv </Text></TouchableOpacity>
      
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
    play: {
      color: "#ffe05d",
      fontWeight: "bold",
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