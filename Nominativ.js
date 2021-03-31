import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';
import { color } from 'react-native-reanimated';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// export default DerDieDas = () => {
//     return(
//         <View style={styles.container}>
//           <ScrollView>
//                 <Text style={styles.sectionDivider}>Предстои ни да разгледаме подробно именителен падеж (Nominativ). Въпреки, че това е най-лекия падеж, е необходимо да се обърне нужното внимание. Изучаването на всички именни части на речта (съществително, прилагателно, местоимение, числително) започва именно с именителен падеж, тъй като неговата форма се явява речникова (т. е. формата в номинатив е тази, която виждаме в речниците).  </Text>
//                 <Text style={styles.grammarText}>Nominativ (именителен падеж)  в немския език се нарича още и Werfall, тъй като той отговаря на въпросите кой? (wer?), какво? (was?). Въпросът wer се отнася към одушевени предмети, а was – към неодушевени. </Text>
//                 <Text style={styles.grammarText}>Der Junge spielt mit dem Ball. – Момчето играе с топката.</Text>
//                 <Text style={styles.grammarText}>Das Fahrrad steht neben dem Haus. – Велосипедът стои до къщата.</Text>
//                 <Text style={styles.grammarText}>Was steht neben dem Haus? – das Fahrrad. = Nominativ. – какво стои до къщата? – велосипед = Именителен падеж</Text>
//                 <Text style={styles.grammarText}>Показатели за именителен падеж се явяват определителния и неопределителен член. Ако те липсват, то тогава такъв маркер се явяват прилагателните или местоименията.</Text>
//           </ScrollView>
//         </View>
//     )
// }

export default class Nominativ extends Component {
    render() {
      const tableHead1 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum'];
      const tableData1 = [
        ['Nominativ', 'ein', 'eine', 'ein'],
      ];

      const tableHead2 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum', 'мн. ч. -plural'];
      const tableData2 = [
        ['Nominativ', 'der', 'die', 'das', 'die'],
      ];
    
      return (
        <View>
            <ScrollView>
                <Text style={styles.sectionDivider}>Предстои ни да разгледаме подробно именителен падеж (Nominativ). Въпреки, че това е най-лекия падеж, е необходимо да се обърне нужното внимание. Изучаването на всички именни части на речта (съществително, прилагателно, местоимение, числително) започва именно с именителен падеж, тъй като неговата форма се явява речникова (т. е. формата в номинатив е тази, която виждаме в речниците).  </Text>
                <Text style={styles.grammarText}>Nominativ (именителен падеж)  в немския език се нарича още и Werfall, тъй като той отговаря на въпросите кой? (wer?), какво? (was?). Въпросът wer се отнася към одушевени предмети, а was – към неодушевени. </Text>
                <Text style={styles.grammarText}>Der Junge spielt mit dem Ball. – Момчето играе с топката.</Text>
                <Text style={styles.grammarText}>Das Fahrrad steht neben dem Haus. – Велосипедът стои до къщата.</Text>
                <Text style={styles.grammarText}>Was steht neben dem Haus? – das Fahrrad. = Nominativ. – какво стои до къщата? – велосипед = Именителен падеж</Text>
                <Text style={styles.grammarText}>Показатели за именителен падеж се явяват определителния и неопределителен член. Ако те липсват, то тогава такъв маркер се явяват прилагателните или местоименията.</Text>
                <Text style={styles.grammarText}>Неопределителен член в именителен падеж:</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Oпределителен член в именителен падеж:</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead2} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData2} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Nominativ се употребява в речта в качеството си на субект на действието, обикновено това е съществително или местоимение. Субекта може да бъде във всеки един от родовете и във всяко едно от числата. Ако субекта е изразен чрез местоимение, то той притежава и категорията лице. В род, число и лице субекта се съгласува с предиката (сказуемото), което обикновено се изразява с глагол. </Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Marina</Text> arbeitet in der Schule. – Марина работи в училището.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Die Ärztin</Text> kommt später. – Лекарят дойде по-късно.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Er</Text> fährt nächste Woche in Italien. – Той отива следващата седмица в Италия.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Eltern</Text> geben den Kindern alles Beste. – Родителите дават на децата си всичко най-добро.</Text>
                <Text style={styles.sectionDivider}>Nominativ в немския език се използва и при обръщенията (Anredenominativ):</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Maxim</Text>, komm mal bitte hierher. – Максим, моля, ела тук.</Text>
                <Text style={styles.grammarText}>Guten Tag, <Text style={styles.marker}>Herr Müller</Text>! – Добър ден, г-н Мюлер!</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Lieber Freund</Text>! Ich schreibe dir, um dich zu meiner Hochzeit einzuladen. – Скъпи приятелю! Пиша ти, за да те поканя на моята сватба.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Schatz</Text>, wann kommst nach Hause? – Скъпи, кога идваш у дома??</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Mutti</Text>! Kauf mir bitte eine Kinder-Überraschung. – Мамо! Купи ми, моля те, Киндер-сюрприз!</Text>
                <Text style={styles.sectionDivider}>Именителен падеж може да се използва и в качеството си на приложение към субекта:</Text>          
                <Text style={styles.grammarText}>Aleksander, <Text style={styles.marker}>mein ehemaliger Schulfreund</Text>, lebt jetzt in Kanada. –Александър, моя бивш съученик, сега живее в Канада.</Text>
                <Text style={styles.grammarText}>Moskau, <Text style={styles.marker}>die russische Hauptstadt</Text>, ist eine der schönsten Städte der Welt. – Москва, столица на Русия, е един от най-красивите градове в света.</Text>
                <Text style={styles.sectionDivider}>Nominativ в немския език много често се явява част от съставното именно сказуемо. В тази роля могат да бъдат всички именни части на речта (съществителни, прилагателни, местоимения, числителни).</Text>
                <Text style={styles.grammarText}>Xenia ist <Text style={styles.marker}>Lehrerin</Text>. – Ксения е учителка.</Text>
                <Text style={styles.grammarText}>Petr ist <Text style={styles.marker}>krank</Text>. – Петер е болен.</Text>
                <Text style={styles.grammarText}>Ela ist <Text style={styles.marker}>meine beste Freundin</Text>. – Ела е моята най-добра приятелка.</Text>
                <Text style={styles.grammarText}>Die Ukraine ist <Text style={styles.marker}>das zweite größte Land in Europa</Text>. – Украйна  е втората по големина държава в Европа.</Text>
                <Text style={styles.sectionDivider}>Глаголите, изискващи заедно със себе си именна част, се наричат копулативни и заемат междинно положение между спомагателните и смисловите глаголи. Към този вид глаголи се отнасят sein (съм), werden (ставам), bleiben (оставам). В качеството си на копулативни глаголи могат да се използват глаголите heißen (казвам се), wirken (действам, въздействам), scheinen (светя), erscheinen (явявам се), dünken (струва ми се) и пасивните конструкции genannt werden, gerufen werden.</Text>
                <Text style={styles.grammarText}>Hallo Petra!  Du siehst wie <Text style={styles.marker}>ein Topmodell aus</Text>! – Здравей Петра! Изглеждаш като топ модел!</Text>
                <Text style={styles.grammarText}>Er gilt als <Text style={styles.marker}>bester Koch</Text> in unserer Stadt. – Той се смята за най-добрия готвач в нашия град.</Text>
                <Text style={styles.grammarText}>Erikas neuer Freund mit besten Manieren erwies sich als <Text style={styles.marker}>gemeiner Hochstapler</Text>. – Новият приятел на Ерика с добрите маниери се оказа просто мошеник.</Text>
                <Text style={styles.grammarText}>Wenn ich dachte an manche Situationen in Vergangenheit, komme ich mir selbst wie <Text style={styles.marker}>ein Idiot</Text> vor. – Когато мисля за някои случки от миналото, сам себе си наричам идиот.</Text>
                <Text style={styles.sectionDivider}>Още една сфера на приложение на именителния падеж – в сложните несъгласувани безсъюзни или непълни изречение, които често се срещат в заглавията на статии или рекламни обявления:</Text>
                <Text style={styles.grammarText}>Sie kamen innerlich einfach nicht zusammen: <Text style={styles.marker}>Eis und Flamme</Text>. – Те не си паснаха в характерите: лед и огън.</Text>
                <Text style={styles.grammarText}>Nur heute: <Text style={styles.marker}>alle Kleider</Text> mit Rabatt bis 50%. – Само днес: всички рокли с отстъпка до 50%</Text>
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
    }
  });