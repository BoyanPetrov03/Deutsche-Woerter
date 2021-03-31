import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';
import { color } from 'react-native-reanimated';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Akkusativ extends Component {
    render() {
      const tableHead1 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum'];
      const tableData1 = [
        ['Nominativ', 'ein', 'eine', 'ein'],
        ['Akkusativ', 'einen', 'eine', 'ein'],
        ['Dativ', 'einem', 'einer', 'einem'],
      ];

      const tableHead2 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum', 'мн. ч. -plural'];
      const tableData2 = [
        ['Nominativ', 'der', 'die', 'das', 'die'],
        ['Akkusativ', 'den', 'die', 'das', 'die'],
        ['Dativ', 'dem', 'der', 'dem', 'den'],
      ];

      const tableHead3 = ['Nominativ', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie/sie'];
      const tableData3 = [
        ['Dativ', 'mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen'],
      ];
    
      return (
        <View>
            <ScrollView>
                <Text style={styles.sectionDivider}>Дателния падеж в немския език обикновено се изразява с:</Text>
                <Text style={styles.sectionDivider}>Неопределителен член в дателен падеж.</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.sectionDivider}>Определителен член в дателен падеж:</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead2} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData2} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.sectionDivider}>ВНИМАНИЕ! Обикновено съществителните в дателен падеж, мн. ч. Променят окончанието си на  –n.</Text>
                <Text style={styles.grammarText}>Die Kinder – den Kindern</Text>
                <Text style={styles.grammarText}>Die Freunde – den Freunden</Text>
                <Text style={styles.grammarText}>Die Häuser – den Häusern</Text>
                <Text style={styles.grammarText}>Die Politiker – den Politikern</Text>
                <Text style={styles.sectionDivider}>Личните местоимения в дателен падеж.</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead3} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData3} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Дателния падеж отговаря на въпросите wem? (кому?), wo? (къде?) wann? (кога?) и изпълнява ролята на непряк обект или обстоятелство.</Text>
                <Text style={styles.grammarText}>Непряк обект е участник в действието, по правило – негов адресат.</Text>
                <Text style={styles.grammarText}>Der Lehrer hat <Text style={styles.marker}>den Schülern</Text> keine Hausarbeit gegeben. – Учителят не е дал на учениците домашна работа.</Text>
                <Text style={styles.grammarText}>Meine Oma hat <Text style={styles.marker}>mir</Text> ein neues Handy geschenkt. – Моята баба ми подари нов мобилен телефон.</Text>
                <Text style={styles.sectionDivider}>ВНИМАНИЕ! Непрекия обект (в дателен падеж) в немския език винаги предшества прекия обект (във винителен падеж), ако обаче и двата обекта са изразени със съществителни:</Text>
                <Text style={styles.grammarText}>Die Mutter liest <Text style={styles.marker}>dem Kind</Text> ein Märchen. - Майката чете приказка на детето.</Text>
                <Text style={styles.sectionDivider}>Съществуват редица глаголи, които изискват датив: gehören (принадлежа), gehorchen (подчинявам се), gefallen (харесвам), vertrauen (доверявам се), gratulieren (поздравявам някого), zuhören (внимателно слушам някого), zusehen (гледам някого.), ähneln (приличам на) и др. </Text>
                <Text style={styles.sectionDivider}>Съществуват и предлози, които винаги се употребяват с датив, без това да зависи от значението на предлога: aus (из, от), bei (в, при), entgegen (напротив, въпреки), gegenüber (срещу, спрямо, по отношение на), mit (със), nach (в, към), seit (от), von (от), zu (към, на, в).</Text>
                <Text style={styles.grammarText}>Die Kinder spielen <Text style={styles.marker}>bei der Schule</Text>. – Децата играят в училището.</Text>
                <Text style={styles.grammarText}>Ich wohne immer noch <Text style={styles.marker}>bei meinen Eltern</Text>. – Аз все още живея с родителите си.</Text>
                <Text style={styles.grammarText}>Das Wasser kocht <Text style={styles.marker}>bei 100 Grad</Text>. – Водата кипи при 100 градуса.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Beim Essen</Text> haben wir über die Urlaubspläne gesprochen.  – По време на хранене говорихме за плановете за отпуската.</Text>
                <Text style={styles.sectionDivider}>Wohin  fährst du? – Къде отиваш?
Nach Berlin.  – В Берлин.</Text>
                <Text style={styles.grammarText}>Er ist in Laden nach <Text style={styles.marker}>dem Brot</Text> gegangen. – Той е отишъл в магазина за хляб.</Text>
                <Text style={styles.grammarText}>Nach der Arbeit gehe ich <Text style={styles.marker}>in den Sportklub</Text>. – След работа отивам в спортния клуб.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Nach dem Bericht</Text> der Polizei hat der Verbrecher Geiseln genommen. – Според доклада на полицията престъпника е взел заложници.</Text>
                <Text style={styles.sectionDivider}>Има и такива предлози, които в зависимост от ситуацията, могат да се използват с датив или акузатив: an (на, до, при), auf (на), in (в), hinter (зад), neben (близо до), über (над), unter (под), vor (преди), zwischen (между). С дателен падеж се използват, когато става въпрос за место, т. е . при отговор на въпроса къде? (wo?).</Text>
                <Text style={styles.grammarText}>Meine Sachen liegen <Text style={styles.marker}>auf dem Tisch</Text>. – Моите вещи лежат на масата.</Text>
                <Text style={styles.grammarText}>Das Bild hängt <Text style={styles.marker}>an der Wand</Text>. – Картината виси на стената.</Text>
                <Text style={styles.grammarText}>Mein Schlüssel ist <Text style={styles.marker}>in der Tasche</Text>. – Моя ключ е в чантата.</Text>
                <Text style={styles.grammarText}>Ich wusste, dass er hinter <Text style={styles.marker}>der Tür</Text> stand. – Аз знам, че той стои зад дървото.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Neben meiner Schule</Text> gibt es einen Spielplatz. – Близо до моето училище има детска площадка.</Text>
                <Text style={styles.grammarText}>Das Regal hängt <Text style={styles.marker}>über dem Bett</Text>. Das ist gefährlich. – Рафтът виси над кревата. Това е опасно.</Text>
                <Text style={styles.grammarText}>Die Katze schläft <Text style={styles.marker}>unter dem Tisch</Text>. – Котката спи под масата.</Text>
                <Text style={styles.grammarText}>Ich sitze <Text style={styles.marker}>vor dem Fenster</Text>. – Аз седя пред прозореца.</Text>
                <Text style={styles.grammarText}>Mein Haus steht <Text style={styles.marker}>zwischen dem Krankenhaus und dem Kindergarten</Text>. – Моят дом е между болницата и детската градина.</Text>
                <Text style={styles.sectionDivider}>Wann hast du Urlaub? – Кога имаш отпуск?
Im August. Ich fahre nach Griechenland. – През август. Отивам в Гърция.</Text>
                <Text style={styles.sectionDivider}>По правило, при отговор на въпроса "Kога?" се използват предлозите in, an, vor с датив и um с акузатив.</Text>
                <Text style={styles.sectionDivider}>Предлогът <Text style={styles.marker}>in</Text> указва на неопределено време в течение на определен период (седмици, месеци, годишни времена, десетилетия и т. н.).  При употреба на съществителни в мъжки и среден род с определителен член dem се получава сливане на предлог и член:</Text>
                <Text style={styles.grammarText}>In + dem = im.</Text>
                <Text style={styles.grammarText}>Im Januar, im Oktober, in der letzten Zeit, im Sommer, im Herbst, in 80-er Jahren, in kommenden Tagen и т. н. Понякога при указването на година може да се използва и остарялата форма im Jahre + годината: im Jahre 1945.</Text>
                <Text style={styles.sectionDivider}>Предлогът <Text style={styles.marker}>an</Text> се използва с дните от седмицата, дати, празници и времеви отрязъци. Той също се слива с пълния член при мъжки и среден род:</Text>
                <Text style={styles.grammarText}>An + dem = am.</Text>
                <Text style={styles.grammarText}>Am Montag, am Freitag, an Pfingsten, an Weihnachten, am Abend, am 27.11.2011, am Anfang, am Ende.</Text>
                <Text style={styles.grammarText}>Предлогът <Text style={styles.marker}>vor</Text> се използва при обозначаването на действие, събитие или период в миналото, които са предшествали други действия:</Text>
                <Text style={styles.grammarText}>Vor dem Krieg arbeitete mein Opa als Lehrer. – Преди войната дядо ми е работил като учител.</Text>
                <Text style={styles.grammarText}>Vor dem Essenwäscht sich man die Hände. – Преди хранене се мият ръцете.</Text>
                <Text style={styles.sectionDivider}>Предлогът um винаги се използва с винителен падеж (Akkusativ). Когато става въпрос за време, той се употребява винаги с точно указание за времето (показанието на часовника): um 17 Uhr, um 15.15 и т. н.</Text>
            </ScrollView>
        </View>
      )
    }
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
    },
    table: {
        margin: "2%",
    },
    marker: {
        color: "#fed049",
        fontWeight: "bold"
    },
    markerBlue: {
        color: "#1687a7",
        fontWeight: "bold"
    },
    markerGreen: {
      color: "#7eca9c",
      fontWeight: "bold",
    }
  });