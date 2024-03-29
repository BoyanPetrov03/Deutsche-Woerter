import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from "./Game";
import Grammar from "./Grammar";
import HomeScreen from "./HomeScreen";
import DerDieDas from "./DerDieDas";
import Nominativ from "./Nominativ";
import Akkusativ from "./Akkusativ";
import Dativ from "./Dativ";
import Genetiv from "./Genetiv"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Начало" component={HomeScreen} />
        <Stack.Screen name="Игра на думи" component={Game} />
        <Stack.Screen name="Граматика" component={Grammar} />
        <Stack.Screen name="Der Die Das" component={DerDieDas} />
        <Stack.Screen name="Nominativ" component={Nominativ} />
        <Stack.Screen name="Akkusativ" component={Akkusativ} />
        <Stack.Screen name="Dativ" component={Dativ} />
        <Stack.Screen name="Genetiv" component={Genetiv} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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