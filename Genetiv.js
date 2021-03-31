import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';
import { color } from 'react-native-reanimated';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Genetiv extends Component {
    render() {
      const tableHead1 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum'];
      const tableData1 = [
        ['Nominativ', 'ein', 'eine', 'ein'],
        ['Akkusativ', 'einen', 'eine', 'ein'],
        ['Dativ', 'einem', 'einer', 'einem'],
        ['Genetiv', 'eines', 'einer', 'eines'],
      ];

      const tableHead2 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum', 'мн. ч. -plural'];
      const tableData2 = [
        ['Nominativ', 'der', 'die', 'das', 'die'],
        ['Akkusativ', 'den', 'die', 'das', 'die'],
        ['Dativ', 'dem', 'der', 'dem', 'den'],
        ['Genetiv', 'des', 'der', 'des', 'der'],
      ];
    
      return (
        <View>
            <ScrollView>
                <Text style={styles.sectionDivider}>При изучаването на падежите в немския език, често на родителния падеж не се отделя дължимото внимание, заради това, че в съвременния разговорен език той се използва доволно рядко. Много е разпространена замяната му с дателен падеж. Но би било голяма грешка да не се изучава въобще, защото в писмената реч той се употребява много активно. </Text>
                <Text style={styles.grammarText}>Неопределителни членове:</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Най-разпространеното използване на родителния падеж е в конструкцията съществително + съществително (обикновено със значение принадлежност): das Auto <Text style={styles.marker}>meines Mannes</Text> (колата на моя мъж) , der Mann <Text style={styles.marker}>meiner Tochter</Text> (съпругът на моята дъщеря), die Kleider <Text style={styles.marker}>des Kindes</Text> (дрехите на детето), das Haus <Text style={styles.marker}>meiner Eltern</Text> (къщата на моите родители). Такива съществителни отговарят на въпроса чий? (wessen?). В разговорната всекидневна реч тях можете да замените с von + Dativ: das Auto von meinem Mann, der Mann von meiner Tochter и т. н. Особено често се среща в Южна Германия. </Text>
                <Text style={styles.grammarText}>Строго погледнато, не винаги словосъчетанията съществително + съществително обозначават принадлежност. Те могат да имат и други значения: die Arbeit der Lehrerin (работата на учителя), Hilfe <Text style={styles.marker}>des älteren Bruders</Text> (с помощ на по-големия брат) – източник на действие,  die Untersuchung <Text style={styles.marker}>des Patienten</Text> (изследване на пациента), die Renovierung <Text style={styles.marker}>der Wohnung </Text>(ремонт на жилището) – обект на действието, der Wagon <Text style={styles.marker}>zweiter Klasse</Text> (вагон втора класа), Speisen <Text style={styles.marker}>der besten Qualität</Text> (кухня високо качество) – свойство, качество на предмета и т. н. Най-важното е да се помни, че второто съществително е винаги в родителен падеж.</Text>
                <Text style={styles.grammarText}>Използвайки Genitiv трябва да бъдем особено внимателни при образуването на формите за мъжки и среден род: обикновено те получават окончания –s (-es), както вероятно вече сте забелязали от примерите по-горе: Geburtstag <Text style={styles.marker}>meines Vaters</Text> (рождения ден на моя баща), das Handy <Text style={styles.marker}>ihres Freundes</Text> мобилният телефон на нейният приятел), das Zimmer <Text style={styles.marker}>ihres Kindes</Text> (стаята на тяхното дете), <Text style={styles.marker}>die Puppe des Mädchens</Text> (куклата на момичето).</Text>
                <Text style={styles.grammarText}>Окончание –es се добавя към:</Text>
                <Text style={styles.grammarText}>Обикновени /едносъставни/ съществителни: das Kind – des Kindes, das Bild – des Bildes, der Sohn – des Sohnes, der Tag – des Tages и т. н.</Text>
                <Text style={styles.grammarText}>Съществителни, окончаващи на ss, — ß, — tz, — x и – z: der Bus- des Buses, der Fluss  – des Flusses, der Arzt – des Arztes,  der Komplex – des Komplexes, der Platz – des Platzes. ВНИМАНИЕ! При съществителни с окончание –nis се получава двоен s: das Ergebnis – des Ergebnisses, das Verständnis – des Verständnisses, das Zeugnis – des Zeugnisses и т.д.</Text>
                <Text style={styles.grammarText}>Съществителни с ударение на последната сричка: der Erfolg –des Erfolges и т. н.</Text>
                <Text style={styles.grammarText}>В останалите случаи се приема, като правило, окончание -s, но не бива да се забравя за слабото склонение на съществителните (n-Deklination) – съществителните с такова склонение получават окончание -en (както и при всички останали падежи): der Mensch – des Menschen, der Russe – des Russen, der Hase – des Hasen и т. н.</Text>
                <Text style={styles.sectionDivider}>Собствените имена също получават окончание –s, без значение от рода, като съществителното в родителен падеж предшества съществителното в именителен:</Text>
                <Text style={styles.grammarText}>Das ist <Text style={styles.marker}>Manuelas</Text> Fahrrad. – Това е велосипеда на Мануела.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Peters</Text> Auto ist kaputt. – Колата на Петер се развали.</Text>
                <Text style={styles.grammarText}>Ich habe Frau <Text style={styles.marker}>Reiners</Text> Pass gefunden. – Намерих паспорта на г-жа Райнер.</Text>
                <Text style={styles.sectionDivider}>Ако собственото име завършва на s, — tz, — x или z, то в писмената реч родителния падеж се обозначава с апостроф:</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Max’</Text> Heft liegt auf dem Tisch. – Тетрадката на Макс лежи на масата.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Hans’</Text> Mutter kommt nächste Woche. – Майката на Ханс ще дойде следващата седмица.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Fritz’</Text> Kinder spielen mit meinen zusammen. – Децата на Фриц играят заедно с моите.</Text>
                <Text style={styles.grammarText}>Съществува и остаряла форма - Fritzens, Hansens, но тя е малко употребима. В устната реч такива конструкции не е желателно да се употребяват, целесъобразно е да се заменят с конструкции с предлог von + Dativ: das Heft von Max, die Mutter von Hans, die Kinder von Fritz…</Text>
                <Text style={styles.grammarText}>Освен това, тази форма се предпочита при използването на съществителни в множествено число. До колкото в множествено число думата не приема никакво окончание, то падежното значение се изразява само от определителния или неопределителен член. При употребяването на съществителни с определителен член проблем няма: die Sachen <Text style={styles.marker}>der Kinder</Text> (вещите на децата), die Kleider <Text style={styles.marker}>der Frauen</Text> (роклите на жените), die Werke <Text style={styles.marker}>der Künstler</Text> (работите на художниците). Но такива словосъчетания са правилни и възможни когато иде реч за конкретни деца, жени и художници. Ако говорим по принцип, нямайки предвид конкретни хора или предмети, то употребяването на определителен член не е възможно. В тези случаи на помощ отново идва дателен падеж с предлога von: Sachen von Kindern, Kleider von  Frauen, Werke von Künstlern.</Text>
                <Text style={styles.grammarText}>Ако пред думата има прилагателно или местоимение, то те изразяват родителния падеж със своите окончания: Sachen kleiner Kinder (вещите на малките деца), die Kleider junger Frauen (роклите на младите жени), die Werke berühmterKünstler (работите на известните художници).</Text>
                <Text style={styles.sectionDivider}>Genitiv (родителен падеж) в немския език се използва не само при описанието на съществителни и словосъчетания. Съществуват и цяла група глаголи и прилагателни, които изискват след себе си задължително тази падежна форма. </Text>
                <Text style={styles.sectionDivider}>Така, например, глаголът bedürfen (нуждая се), harren (чакам с нетърпение), gedenken (помня, спомням си), bezichtigen (обвинявам уличавам), beschuldigen (обвинявам), verweisen (изгонвам), würdigen (удостоявам, ценя), sich rühmen (хваля се), sich erfreuen (притежавам), sich entledigen (избавям се), sich befleißigen (старая се, стремя се), sich bedienen (възползвам се), sich erbarmen (съжалявам), sich schämen (срамувам се), sich versichern (обезпечавам се)  изискват обект в родителен падеж.</Text>
                <Text style={styles.grammarText}>Er rühmt sich seines Sieges im Boxkampf. – Той се хвали със своята победа в боксовия мач.</Text>
                <Text style={styles.grammarText}>Leider erfreue ich mich keiner besten Gesundheit. – За съжаление, аз не притежавам добро здраве. </Text>
                <Text style={styles.grammarText}>Ich muss mich erst seiner Hilfe versichern. – Трябва първо да си осигуря неговата помощ.</Text>
                <Text style={styles.grammarText}>Der Berühmte russische Schriftsteller A. Solschenizyn wurde der USSR verwiesen. – Известния руски писател А.Солженицин е бил изгонен от СССР.</Text>
                <Text style={styles.sectionDivider}>Някои прилагателни също се употребяват с обекти в родителен падеж, например: unkundig (несведущ, незнаещ), verdächtig (заподозрян), bewusst (осъзнат) mächtig (владеещ), (un)würdig ( (не)достоен), überdrüssig (нещо ми омръзва, дотяга ми).</Text>
                <Text style={styles.grammarText}>Er ist des Lebens ganz unkundig. – Той е неосведомен за живота.</Text>
                <Text style={styles.grammarText}>Fast jeder Schüler ist der Schule zum Schulabschluss total überdrüssig. – Почти на всеки ученик му втръсва към края на училището.</Text>
                <Text style={styles.grammarText}>Er war der Börsenmachenschaften verdächtig, seine Schuld aber wurde nicht  bewiesen. – Заподозрян бе в борсови машинации, но вината му не беше доказана.</Text>
                <Text style={styles.sectionDivider}>Разгледаните по-горе глаголи и прилагателни се използват в писмената реч на висок стил с родителен падеж и се считат за остарели форми. В ежедневната реч могат да се заменят с различни предлози, като това не изменя значението им. </Text>
                <Text style={styles.sectionDivider}>Има и цяла група предлози, които изискват след себе си Genitiv. Тази група е много голяма: abseits (в страни от), anhand (при помощи), angesichts (предвид на),  anlässlich (по повод на), anstatt (вместо, в замяна на), anstelle (вместо), aufgrund (на базата на), außerhalb (извън), binnen (в течение на, по протежение на), diesseits (от тази страна), gemäß (в съответствие със), halber (предвид), hinsichtlich (по отношение на), infolge (вследствие), inmitten (посред), innerhalb (вътре, в), jenseits (от друга страна), kraft (на основание, по силата на),  längs (покрай), laut (съгласно), mittels (посредством, с помоща на), oberhalb (над), statt (вместо), trotz (въпреки), um … Willen (в името), ungeachtet (въпреки), unterhalb (под), unweit (недалече от), vermittels (посредством, по пътя на), während (в продължение на, по време на), wegen (заради), zeit (в течение на), zwecks (с цел)  и няколко други.</Text>
                <Text style={styles.grammarText}>Aufgrund seines nachgewiesenen Alibis wurde der Verdächtige freigesprochen. – На базата на доказаното алиби, заподозрения беше пуснат.</Text>
                <Text style={styles.grammarText}>Ungeachtet vieler Streike hat die Unternehmensleitung über 100 Arbeitnehmer entlassen. – Въпреки многото стачки, ръководството на предприятието уволнил повече от 100 служителя.</Text>
                <Text style={styles.grammarText}>Der Chef hielt lange feierliche  Rede anlässlich des Jubiläums unserer Firma. – Шефът държал дълга тържествена реч по повод юбилея на нашата фирма. </Text>
                <Text style={styles.grammarText}>Statt des Straftäters hat die Polizei das Opfer festgenommen. – Вместо престъпника, полицията задържала жертвата.</Text>
                <Text style={styles.grammarText}>Цялата сложност при употребата на много от тези предлози (например, wegen, gemäß, laut, infolge, mittels, binnen, trotz) се заключава в това, че в разговорната реч се допуска тяхното използване с дателен падеж. Но строгите норми на литературния език изискват все пак родителен падеж. Затова, ако искате да се изразите правилно, ще се наложи да усвоите Genitiv. НО! Има още една особеност: при използването на тези предлози със съществително без член или прилагателно (или местоимение) в множествено число (т.е. когато нямаш сигурен маркер за родителен падеж) нормите на литературния език препоръчват употребата на датив (в тези конструкции може да се използва предлога von):</Text>
                <Text style={styles.sectionDivider}>Mangels der überzeugenden Beweise (G.) musste die Polizei das Verfahren gegen ihn einstellen. – Заради недостатъчните убедителни доказателства, полицията се наложи да прекрати разследването против него. </Text>
                <Text style={styles.grammarText}>Mangels Beweisen  (D.) musste die Polizei das Verfahren gegen ihn einstellen. – Заради недостатъчните доказателства полицията трябваше да прекрати разследването против него.</Text>
                <Text style={styles.grammarText}>Angesichts der neuen Tatsachen forderte der Anwalt eine weitere Ermittlung. – Предвид новите обстоятелства, адвоката моли за ново разследване.</Text>
                <Text style={styles.grammarText}>Angesichts von 2 Millionen Arbeitslosen musste sich die Regierung um neue Arbeitsplätze kümmern. –Предвид 2-та милиона безработни, правителството е длъжно да помисли за нови работни места. </Text>
                <Text style={styles.grammarText}>Tакива примери могат да се намерят много, затова използвайки тези предлози, не се притеснявайте да погледнете в речника, за да сте сигурни правилно ли сте построили изречението. </Text>
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