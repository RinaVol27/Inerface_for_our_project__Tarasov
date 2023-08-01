import React from "react";
import { Text ,View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

const CreateCard = ({navigation}) => {
	
	return(
		<SafeAreaView style={Styles.m}>
      <ScrollView style={Styles.scrollView}>
        <Card style={Styles.container}>
          <Card.Cover style={Styles.image} source={require("./assets/b.png")} />
          <Card.Content>
            <Title style={Styles.t}>Данаида Монарх</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>Вид бабочек из семейства нимфалид. Одна из самых известных бабочек Северной Америки. В XIX веке представители этого вида были встречены в Новой Зеландии и Австралии. В Европе распространены на Канарских островах и Мадейре. Во время миграций отмечены в Португалии, на Азорских островах, в Испании, Франции, Ирландии, Англии, Швеции. Встречаются на северо-западе Африки. На западном побережье Тихого океана залетевшие особи отмечались от Японии до Новой Гвинеи. В России и Корее достоверно никогда не отмечался.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Home', {name: 'Home'})}>Add To Favourites</Button>
          </Card.Actions>
        </Card>
        <Card style={Styles.container}>
          <Card.Cover style={Styles.image} source={require("./assets/morfo.png")} />
          <Card.Content>
            <Title style={Styles.t}>Морфо</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>(лат. Morpho) — род дневных бабочек из семейства Нимфалиды (Nymphalidae). Ранее данный род выделялся в самостоятельное семейство Morphidae. По различным классификациям к роду относят от 30 до 60 видов, которые по окраске крыльев разделяют на несколько подгрупп.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Home', {name: 'Home'})}>Add To Favourites</Button>
          </Card.Actions>
        </Card>
        <Card style={Styles.container}>
          <Card.Cover style={Styles.image} source={require("./assets/safo.png")} />
          <Card.Content>
            <Title style={Styles.t}>Сафо</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>Сафо (Heliconius sapho) родом из Эквадора. Они любят кормить личинок в основном растениями из семейства Passiflora. Самым интересным фактом об этой бабочке является то, что она мимикрирует с Heliconius cydno. Есть хищники, которые охотятся только на один из этих двух видов, поэтому и Heliconius sapho, и Heliconius cydno стараются походить друг на друга. Сафо принадлежит подсемейству Геликонид.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Home', {name: 'Home'})}>Add To Favourites</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
	)
}
export default CreateCard;

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin: 20,
    width: '90%',
    
	},
  t: {
    fontWeight: 'bold',
  },
  m: {
    flex: 1,
    backgroundColor: "#D2B48C",
    
  },

})
