import React, {Component} from 'react';
import { View, Text, TouchbleOpacity, Image, TextInput, StyleSheet, TouchableHighlight, KeyboardAvoidingView, Switch} from 'react-native';
import BackgroundColor from 'react-native-background-color';

const return_arrow = require("../images/return_arrow.png")

export default class RegisterScreenFt extends Component{
  componentDidMount(){
    BackgroundColor.setColor("#FFFFFF");
  };

  render(){
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{backgroundColor: '#2E8BFD', height: 77, width:450, alignItems: 'center', marginBottom: 40, flexDirection: 'row'}}>
          <Image source={return_arrow} style={{marginLeft: 30}}/>
          <Text style={{ alignItems: 'center', padding: 4, fontSize: 40, color: 'white', fontWeight:'bold', marginLeft: 42, marginTop: 10 ,marginBottom: 20}}>MediciNOW</Text>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Nome:</Text>
          <View style={{borderRadius: 8 , height: 55, width:300, borderWidth: 0.5 , justifyContent: 'flex-start', marginBottom: 40}}>
            <TextInput style={{color: 'black', fontSize: 15}} />
          </View>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Sobrenome:</Text>
          <View style={{borderRadius: 8 , height: 55, width:300, borderWidth: 0.5 , justifyContent: 'flex-start', marginBottom: 40}}>
            <TextInput style={{color: 'black', fontSize: 15}} />
          </View>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Telefone:</Text>
          <View style={{borderRadius: 8 , height: 55, width:300, borderWidth: 0.5 , justifyContent: 'flex-start', marginBottom: 40}}>
            <TextInput style={{color: 'black', fontSize: 15}} placeholder= {'Holla'} keyboardType= 'numeric'/>
          </View>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Você é Médico?</Text>
          <Switch onValueChange/>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('SecondRegisterPage')} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Próximo</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginTop:40,
    width:223,
    height:48,
    backgroundColor:'#2E8BFD',
    alignItems: 'center',
    borderRadius: 42
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    padding: 10
  }
});

RegisterScreenFt.navigationOptions = {
  title: 'FirstRegisterPage',
  header: null
};
