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
      ];

      const tableHead2 = ['', 'м.р. -maskulinum', 'ж.р -femininum', 'ср. р. -neutrum', 'мн. ч. -plural'];
      const tableData2 = [
        ['Nominativ', 'der', 'die', 'das', 'die'],
        ['Akkusativ', 'den', 'die', 'das', 'die'],
      ];
    
      return (
        <View>
            <ScrollView>
                <Text style={styles.sectionDivider}>Винителният падеж в немския език отговаря на въпросите wen? (кого), was? (какво?).  Въпросът wen се използва по отношение на одушевени предмети, а въпросът was – за неодушевени. Винителния падеж отговаря и на въпроса wohin? ((на) къде?), в тези случаи съществителното в акузатив е в ролята на обстоятелство.</Text>
                <Text style={styles.grammarText}> Неопределителен член в Akkusativ</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead1} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData1} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Определителен член в Akkusativ</Text>
                <Table style={styles.table} borderStyle={{borderWidth: 1.5, borderColor: 'black'}}>
                    <Row data={tableHead2} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData2} style={styles.row} textStyle={styles.text}/>
                </Table>
                <Text style={styles.grammarText}>Ich liebe <Text style={styles.marker}>meinen Freund Johann</Text> sehr. – Аз много обичам моя приятел Йохан.</Text>
                <Text style={styles.grammarText}>Wen liebe ich sehr? – Meinen Freund Johann = Akkusativ. – Кого обичам много? – Моя приятел Йохан = Винителен падеж.</Text>
                <Text style={styles.grammarText}>Ich habe dem Kind <Text style={styles.marker}>ein Eis</Text> gekauft. –  Аз купих сладолед на детето.</Text>
                <Text style={styles.grammarText}>Was habe ich dem Kind gekauft? – ein Eis = Akkusativ. – Какво купих? – Сладолед – Винителен падеж.</Text>
                <Text style={styles.sectionDivider}>Най-често Akkusativ (винителен падеж) в немския език се използва при пряк обект с преходен глагол:</Text>
                <Text style={styles.grammarText}>Ich mag <Text style={styles.marker}>Haustiere</Text>.  – Аз обичам домашни животни.</Text>
                <Text style={styles.grammarText}>Ich lese gerade <Text style={styles.marker}>das Magazin</Text>. – Аз чета списание.</Text>
                <Text style={styles.grammarText}>Ich kaufe mir <Text style={styles.marker}>einen neuen Mantel</Text>. – Купувам си ново палто.</Text>
                <Text style={styles.sectionDivider}>На пръв поглед няма нищо сложно, но съществуват глаголи, които се употребяват само и единствено с винителен падеж (едновалентни), а има и такива, които имат два обекта (двувалентни), т. е. винителен и родителен, или винителен и дателен.</Text>
                <Text style={styles.grammarText}>Към едновалентните глаголи, управлявани от чист винителен падеж спадат: lesen (чета), trinken (пия), essen (ям), bauen (строя), angehen (касая се, имам отношение), betreffen (отнасям се), bemalen (изписвам, боядисвам, изрисувам), bewundern (любувам се, възхищавам се), zeichnen (рисwвам, чертая), kennen (зная),  lieben (обичам), mitnehmen (вземам със себе си), reparieren (ремонтирам, поправям) и много други.</Text>
                <Text style={styles.grammarText}>Diese Angelegenheit geht <Text style={styles.marker}>dich</Text> nicht an. – Този въпрос не те засяга/не те касае.</Text>
                <Text style={styles.grammarText}>Er hat <Text style={styles.marker}>mein Handy</Text> repariert. – Той ремонтира моя телефон.</Text>
                <Text style={styles.grammarText}>Ich kenne <Text style={styles.marker}>ihn</Text> seit meiner Schulzeit. – Познавам го още от училищните години.</Text>
                <Text style={styles.sectionDivider}>Много внимателни трябва да бъдем с двувалентните глаголи, тъй като при тях трябва да следим за правилната употреба на два обекта. С винителен и дателен падеж се изполват глаголите: angewöhnen (свиквам, приучвам се), beibringen (обучавам се), bereiten (доставям, причинявам), bieten (предлагам), borgen (давам назаем), leihen, geben (давам) , schenken (подарявам, дарявам), bringen (нося, водя), empfehlen (съветвам), entgegnen (възразявам) , erklären (обяснявам), erlauben (разрешавам), ermöglichen (правя възможно), erzählen (разказвам), mitteilen (съобщавам, предавам), , nehmen (отнемам), opfern (жертвам), raten (съветвам), schreiben (пиша), schicken, senden (изпращам), spenden (жертвам, дарявам), verbieten (забранявам), verdanken (задължен съм) ,  versprechen (обещавам), verzeihen (извинявам се), vorlesen (чета на глас), widmen (посвещавам), zeigen (показвам) и др.</Text>
                <Text style={styles.grammarText}>За следващите примери частта от изречението в Akkusativ ще бъде оцветена в жълто, а тази в Dativ в синьо. Dativ (Дателен падеж) е следващият падеж в немския език, който ще разгледаме. За сега просто следете кое е Akkuzativ!</Text>
                <Text style={styles.grammarText}>Bringe <Text style={styles.markerBlue}>mir</Text> bitte <Text style={styles.marker}>eine Tasse</Text> Tee. – Донеси ми, моля, чаша чай.</Text>
                <Text style={styles.grammarText}>Er ist der einzige Mensch, <Text style={styles.markerBlue}>dem</Text> ich <Text style={styles.marker}>meine Träume</Text> mitteilte. – Той е единственият човек, на който разказах за моите мечти.</Text>
                <Text style={styles.grammarText}>Abends lese ich <Text style={styles.markerBlue}>meinen Kindern</Text> <Text style={styles.marker}>Märchen</Text> vor. – Вечер чета на моите деца приказки.</Text>
                <Text style={styles.grammarText}><Text style={styles.marker}>Mein erstes Buch</Text> werde ich <Text style={styles.markerBlue}>meinem besten Freund</Text> widmen. – Моята първа книга посвещавам на моя най-добър приятел.</Text>
                <Text style={styles.grammarText}>Das Erbe hat <Text style={styles.markerBlue}>mir</Text> sorgloses <Text style={styles.marker}>Studium</Text> ermöglicht. – Наследството направи моето обучение безпроблемно.</Text>
                <Text style={styles.grammarText}>Solch <Text style={styles.marker}>ein Benehmen</Text> habe ich <Text style={styles.markerBlue}>ihm</Text> nicht zugetraut. – Такова поведение от него не съм очаквал.</Text>
                <Text style={styles.grammarText}>По-малко са двувалентните глаголи, изискващи винителен(Akkusaitv) и родителен(Genetiv) падеж. Към тях се отнасят: anklagen, beschuldigen, bezichtigen (обвинявам, предявявам обвинение), belehren (поучавам, уча), berauben (лишавам, отнемам), entbinden (освобождавам), entheben (отстранявам), entwöhnen (отучвам от нещо), überführen (уличавам, изобличавам), verdächtigen (подозирам), versichern (обезпечавам), verweisen (изпращам, гоня от страната), würdigen (удостоявам) и др.</Text>
                <Text style={styles.grammarText}>За следващите примери частта от изречението в Akkusativ ще бъде оцветена в жълто, а тази в Genetiv в зелено.</Text>
                <Text style={styles.grammarText}>Der Arzt hat <Text style={styles.marker}>den Patienten</Text> <Text style={styles.markerGreen}>jeglicher Hoffnung</Text> beraubt. – Лекарят отне всякакви надежди на пациента.</Text>
                <Text style={styles.grammarText}>Er hat <Text style={styles.marker}>mich</Text> <Text style={styles.markerGreen}>keines Blickes</Text> gewürdigt. – Той не ме удостои даже с поглед.</Text>
                <Text style={styles.grammarText}>Die Eltern haben <Text style={styles.marker}>den Sohn</Text> <Text style={styles.markerGreen}>des Nuckels</Text> entwöhnt. – Родителите отучиха сина си от биберона.</Text>
                <Text style={styles.sectionDivider}>Освен глаголите, изискващи винителен падеж, има и някои прилагателни и причастия, употребяващи се с прекия обект. Към тях се отнасят wert, leid, gewohnt, hoch, schwer, alt, breit, dick, tief и др.</Text>
                <Text style={styles.grammarText}>Das Baby ist nur eine Woche alt. – Бебето е само на една седмица.</Text>
                <Text style={styles.grammarText}>Der Zaun ist einen Meter hoch. – Оградата е висока един метър.</Text>
                <Text style={styles.grammarText}>Ich bin körperliche Arbeit nicht gewohnt. – Аз не съм свикнал на физически труд.</Text>
                <Text style={styles.sectionDivider}>Akkusativ се използва и в конструкцията акузатив + инфинитив, обикновено с глаголите heißen ( повиквам), hören (слушам), fühlen (чувствам), lassen (разрешавам, позволявам), sehen (гледам, виждам),  spüren (усещам ) и др.:</Text>
                <Text style={styles.grammarText}>Ich hörte ihn in seinem Zimmer gehen, husten, sprechen. – Аз слушам как той ходи из своята стая, кашля, говори.</Text>
                <Text style={styles.grammarText}>Ich spüre dich atmen. – Чувствам как ти дишаш.</Text>
                <Text style={styles.sectionDivider}>В тези изречения обектът във винителен падеж по смисъл се явява субект на действието, изразено чрез инфинитива.</Text>
                <Text style={styles.grammarText}>Ich spüre dich. - Усещам те.</Text>
                <Text style={styles.grammarText}>Du atmest. → Ich spüre dich atmen. - Ти дишаш. → Усещам, че ти дишаш.</Text>
                <Text style={styles.sectionDivider}>Обекта във винителен падеж също така може да бъде част от съставно сказуемо, обикновено след глаголите nennen (наричам се), heißen (казвам се), schelten (карам се, ругая), schimpfen (ругая), schmähen (обиждам) и др.</Text>
                <Text style={styles.grammarText}>Er nennt sie meine Kleine, obwohl sie über 80 Kilo wiegt. – Той я нарича малка моя въпреки, че тя тежи повече от 80 кг.</Text>
                <Text style={styles.grammarText}>Die Eltern schimpfen mich einen faulen Bären. – Родителите ме наричат/ругаят, обиждат/ ленива мечка.</Text>
                <Text style={styles.grammarText}>Винителния падеж се използва и като уточняващо приложение към обект във винителен падеж:</Text>
                <Text style={styles.grammarText}>In der Schule liebte ich Laura, das schönste Mädchen unserer Klasse. –В училище обичах Лаура, най-красивото момиче в нашия клас.</Text>
                <Text style={styles.grammarText}>Im Zoo haben wir einen Löwen, den König der Tiere, gesehen. – В зоопарка ние видяхме лъв, царя на животните.</Text>
                <Text style={styles.grammarText}>Wir begrüßen Herrn Meier, unseren Chefund Freund. – Приветстваме г-н Майер, наш шеф и приятел.</Text>
                <Text style={styles.sectionDivider}>Разглеждайки Akkusativ, е необходимо да обърнем внимание и на предлозите, които винаги изискват този падеж (независимо от значението им): bis (до), durch (през, чрез), für (за), gegen (против, около), ohne (без), pro (в), um (около), entlang (покрай), wider (против, въпреки).</Text>
                <Text style={styles.grammarText}>Die Demonstranten protestieren gegen Atomkraft. –Демонстрантите протестираха против атомната енергия.</Text>
                <Text style={styles.grammarText}>Ich komme morgen gegen 11 Uhr. – Идвам утре около 11 часа.</Text>
                <Text style={styles.grammarText}>Ich bin zufällig mit dem Auto gegen einen Baum gefahren. – Случайно се врязах в дървото с колата.</Text>
                <Text style={styles.grammarText}>Gehen wir lieber durch den Park. –  По-добре да минем през парка.</Text>
                <Text style={styles.grammarText}>Man lernt eine fremde Sprache am besten durch Kommunikation in dieser Sprache. – Най-добре се учи чужд език чрез общуване на този език.</Text>
                <Text style={styles.grammarText}>Solche Bräuche sind  durch das ganze Europa verbreiten. – Подобни обичаи са разпространени из цяла Европа.</Text>
                <Text style={styles.grammarText}>Durch den Autounfall bildete sich ein Verkehrsstau. – Поради автомобилната катастрофа се образува задръстване.</Text>
                <Text style={styles.sectionDivider}>Съществува и цял ред предлози, които се употребяват с винителен падеж, но не само се него. Това са предлозите за место/направление: an, auf, hinter, neben, in, über, unter, vor, zwischen. Винителен падеж употребяваме при отговор на въпроса (на)къде? (wohin?).</Text>
                <Text style={styles.grammarText}>Ich habe meinen Koffer hinter die Tür gestellt. –  Аз остdвих своя куфар зад вратата.</Text>
                <Text style={styles.grammarText}>Wohin habe ich meinen Koffer gestellt. – Hinter die Tür= Akkusativ. – Къде оставих своя куфар? – Зад вратата = Винителен падеж.</Text>
                <Text style={styles.grammarText}>Häng dieses Buchregal über den Tisch. – Закачи тази лавица над масата.</Text>
                <Text style={styles.grammarText}>Wohin häng dieses Buchregal? – Über den Tisch = Akkusativ. – Къде да закача лавицата? Над масата.</Text>
                <Text style={styles.grammarText}>Wir gehen in den Park spazieren. – Отиваме на разходка в парка.</Text>
                <Text style={styles.grammarText}>Wohin gehen wir? – In den Park = Akkusativ. – Къде отиваме на разходка?. – В парка.</Text>
                <Text style={styles.grammarText}>Akkusativ в немския език се използва и при обстоятелствата за време. Такива словосъчетания отговарят на въпроса колко дълго? (wie lange?) или колко често? (wie oft?).</Text>
                <Text style={styles.grammarText}>Es regnete ganze Woche. – Цяла седмица вали дъжд.</Text>
                <Text style={styles.grammarText}>Wie lange regnete es? – Ganze Woche – Akkusativ. – Колко дълго вали? – Цяла седмица.</Text>
                <Text style={styles.grammarText}>Jeden Tag rufe ich meine Mutti an. – Звъня на мама всеки ден.</Text>
                <Text style={styles.grammarText}>Wie oft rufst du deine Mutti an? – Jeden Tag = Akkusativ. – Колко често звъниш на мама? – Всеки ден.</Text>
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