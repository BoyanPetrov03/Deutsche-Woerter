import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default DerDieDas = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.grammarText}> Der </Text>
            <Text style={styles.grammarText}> Следните съществителни имена са от мъжки род (der): </Text>
            <Text style={styles.grammarText}> Съществителни имена на хора/професии с мъжествена функция: Vater, Pilot, Artzt...;</Text>
            <Text style={styles.grammarText}> Имената на сезоните: Frühling, Sommer, Herbst, Winer; </Text>
            <Text style={styles.grammarText}> Имената на месеците: Januar, Juli, Dezember...; </Text>
        </View>
    )
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