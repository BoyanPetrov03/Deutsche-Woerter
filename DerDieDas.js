import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';

export default DerDieDas = () => {
    return(
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.heading}> Der </Text>
            <Text style={styles.sectionDivider}>Следните съществителни имена са от мъжки род (der): </Text>
            <Text style={styles.grammarText}>- Съществителни имена на хора/професии с мъжествена функция: Vater, Pilot, Artzt...;</Text>
            <Text style={styles.grammarText}>- Имената на сезоните: Frühling, Sommer, Herbst, Winer; </Text>
            <Text style={styles.grammarText}>- Имената на месеците: Januar, Juli, Dezember...; </Text>
            <Text style={styles.grammarText}>- Имената на дните от седмицата: Montag, Dienstag, Sonntag;</Text>
            <Text style={styles.grammarText}>- Имената на посоките от компаса: Nordwest(en), Süd(en);</Text>
            <Text style={styles.grammarText}>- Имената на валежи: Regen, Schnee, Hagel;</Text>
            <Text style={styles.grammarText}>- Имената на марки коли: BMW, Audi, Mercedes;</Text>
            <Text style={styles.grammarText}>- Имената на влакоце: IC;</Text>
            <Text style={styles.grammarText}>- Съществителни имена от образувани от глаголи без представка: Gang, Fang;</Text>
            <Text style={styles.sectionDivider}>Следните категории съществителни имена са <Text style={styles.bold}>основно</Text> от мъжки род: </Text>
            <Text style={styles.grammarText}>- Имена на алкохолни напитки: Cognac, Wein, Whiskey; (Изключение - das Bier)</Text>
            <Text style={styles.grammarText}>- Имена на реки извън Европа: Mississippi, Amazonas;</Text>
            <Text style={styles.grammarText}>- Имена на планини: Mont Blanc, Kilimanjaro; (Изключение: die Zugspitze)</Text>
            <Text style={styles.sectionDivider}>Съществителни имена със следните надставки:</Text>
            <Text style={styles.grammarText}>- er: Lehrer, Vater ;</Text>
            <Text style={styles.grammarText}>- ismus: Kapitalismus, Journalismus;</Text>
            <Text style={styles.sectionDivider}><Text style={styles.bold}>Повечето</Text> съществителни имена със следните надставки са от мъжки род:</Text>
            <Text style={styles.grammarText}>- ant: Demonstrant, Elefant; (Изключение: das Croissant, das Restaurant)</Text>
            <Text style={styles.grammarText}>- ling: Lehrling, Schützling; (Изключение: das Dribbling, das Bowling)</Text>
            <Text style={styles.grammarText}>- ner: Renter, Schaffner, Zöllner; (Изключение: das Banner, die Wiener)</Text>
            <Text style={styles.grammarText}>- or: Motor, Traktor; (Изключение: das Gegentor, das Chlor)</Text>
            <Text style={styles.sectionDivider}>Вниманвайте! Всички съществителни имена в множествено число използват "die"! Всички галени съществителни имена на предмети използват "das"!</Text>
            <Text style={styles.heading}>Die</Text>
            <Text style={styles.sectionDivider}>Следните съществителни имена са от женски род (die):</Text>
            <Text style={styles.grammarText}>- Съществителни имена на хора/професии с женствена функция: Mutter, Friseuse, Ärztin;</Text>
            <Text style={styles.grammarText}>- Имена на марки мотоциклети: Harley Davidson, BMW (само мотоциклети), Yamaha;</Text>
            <Text style={styles.grammarText}>- Имена на самолети и кораби: Boeing 747, Titanic;</Text>
            <Text style={styles.grammarText}>- Кардинални числа: Eins, Drei;</Text>
            <Text style={styles.sectionDivider}>Следните категории съществителни имена са <Text style={styles.bold}>основно</Text> от женски род: </Text>
            <Text style={styles.grammarText}>- Имена на растения: Brike, Chrysantheme, Rose; Изключение(der Ahorn, das Veilchen)</Text>
            <Text style={styles.sectionDivider}>Съществителни имена със следните надставки са от женски род:</Text>
            <Text style={styles.grammarText}>- falt: Vielfalt;</Text>
            <Text style={styles.grammarText}>- heit: Freiheit, Sicherheit;</Text>
            <Text style={styles.grammarText}>- keit: Möglichkeit, Schnelligkeit;</Text>
            <Text style={styles.grammarText}>- schaft: Freundschaft, Mannschaft;</Text>
            <Text style={styles.grammarText}>- t (съществителни образувани от глаголи): Fahrt, Tat;</Text>
            <Text style={styles.grammarText}>- ung: Leitung, Zeitung;</Text>
            <Text style={styles.sectionDivider}>Чуждици със следните надставки са от женски род: </Text>
            <Text style={styles.grammarText}>- ade: Hiptrade, Marmelade;</Text>
            <Text style={styles.grammarText}>- age: Garage, Passage;</Text>
            <Text style={styles.grammarText}>- anz: Eleganz, Dominanz;</Text>
            <Text style={styles.grammarText}>- enz: Existenz, Tandenz;</Text>
            <Text style={styles.grammarText}>- ik: Kritik, Musik;</Text>
            <Text style={styles.grammarText}>- ion: Diskussion, Koalition;</Text>
            <Text style={styles.grammarText}>- tät: Identität, Qualität;</Text>
            <Text style={styles.grammarText}>- ur: Agentur, Reparatur;</Text>
            <Text style={styles.sectionDivider}><Text style={styles.bold}>Повечето</Text> от съществителните имена със следните надставки са от женски род:</Text>
            <Text style={styles.grammarText}>- e: Grenze, Lampe; (Изключение: der Junge, der Freiede)</Text>
            <Text style={styles.grammarText}>- ei: Abtei, Metzgerei; (Изключение: das Ei, der Papagei)</Text>
            <Text style={styles.grammarText}>- ie: Diplomatie, Psychologie; (Изключение: der Junkie, der Hippie)</Text>
            <Text style={styles.grammarText}>- in: Ärztin, Studentin; (Изключение: das Benzin, der Harlekin)</Text>
            <Text style={styles.heading}>Das</Text>
            <Text style={styles.sectionDivider}>Следните глаголи са от среден род (das):</Text>
            <Text style={styles.grammarText}>- Галени имена на съществителни (-chen, lein): Kanninchen, Fräulein;</Text>
            <Text style={styles.grammarText}>- Съществителни образувани от глаголи: Essen, Schreiben;</Text>
            <Text style={styles.grammarText}>- Съществителни образувани от прилагателни имена: Gute, Böse;</Text>
            <Text style={styles.grammarText}>- Имената на цветовете: Gelb, Rot, Blau;</Text>
            <Text style={styles.sectionDivider}>Следните прилагателни имена са <Text style={styles.bold}>основно</Text> от среден род:</Text>
            <Text style={styles.grammarText}>- Почти всички от сто и дванадестте химични елемента: Aluminium, Kupfer, Uran; (точно 6 изключения: der Stickstoff, der Kohlenstoff, der Sauerstoff, der Wasserstof, der Phosphor, der Schwefel)</Text>
            <Text style={styles.grammarText}>- Имена на метали: Blei, Messing, Zinn; (Изключение: die Bronze, der Stahl)</Text>
            <Text style={styles.grammarText}>- Дроби: Drittel, Viertel; (Изключение: die Hälfte)</Text>
            <Text style={styles.sectionDivider}>Съществителни имена със следните надставки са от среден род: </Text>
            <Text style={styles.grammarText}>- ial: Material, Potenzial;</Text>
            <Text style={styles.sectionDivider}><Text style={styles.bold}>Повечето</Text> от съществителните имена със следните надставки са от среден род:</Text>
            <Text style={styles.grammarText}>- ment: Instrument, Parlament; (Изключение: der Konsument, der Ziment)</Text>
            <Text style={styles.grammarText}>- nis: Ergebnis, Tennis; (Изключение: der Erlaubnis, die Wildnis)</Text>
            <Text style={styles.grammarText}>- o: Auto, Konto: (Изключение: die Avocado, der Euro)</Text>
            <Text style={styles.grammarText}>- tum: Quantum, Ultimatum; (Изключение: der Reichtum, der Irrtum)</Text>
            <Text style={styles.grammarText}>- um: (съществителни от латински произход): Publikum, Museum, Stadium;</Text>
          </ScrollView>
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
      marginBottom: 0,
      color: "#495464",
      fontWeight: "500",
      marginTop: "3%",
      fontSize: 18,
    },
    heading: {
      fontWeight: "bold",
      color: "black",
      marginBottom: "2%",
      fontSize: 20,
      marginTop: "1.75%",
    },
    bold: {
      fontWeight: "bold",
      color:"black",
    },
    sectionDivider: {
      color: "#495464",
      fontWeight: "700",
      fontSize: 18,
      padding: 3,
      marginTop: 20,
    }
  });