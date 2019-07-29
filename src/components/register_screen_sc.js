import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, TouchableHighlight, KeyboardAvoidingView, Switch} from 'react-native';
import BackgroundColor from 'react-native-background-color';

const return_arrow = require("../images/return_arrow.png");

export default class RegisterScreenSc extends Component{
  componentDidMount(){
    BackgroundColor.setColor("#FFFFFF");
  };

  handleSubmit = () => {

  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={{backgroundColor: '#2E8BFD', height: 60, width:450, alignItems: 'center', marginBottom: 40, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Image source={return_arrow} style={{marginLeft: 30}}/>
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', padding: 4, fontSize: 40, color: 'white', fontWeight:'bold', marginLeft: 42, marginTop: 10 ,marginBottom: 20}}>MediciNOW</Text>
      </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Email:</Text>
          <View style={{borderRadius: 8 , height: 55, width:300, borderWidth: 0.5 , justifyContent: 'flex-start', marginBottom: 40}}>
            <TextInput style={{color: 'black', fontSize: 15}} />
          </View>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Senha:</Text>
          <View style={{borderRadius: 8 , height: 55, width:300, borderWidth: 0.5 , justifyContent: 'flex-start', marginBottom: 40, maxLength: 8}}>
            <TextInput style={{color: 'black', fontSize: 15}} />
          </View>
        </View>
        <View  style={{ justifyContent: 'flex-start'}}>
          <Text style={{ color: 'black', fontSize: 18, paddingBottom: 5}}>Aceito os Termos de Uso</Text>
            <Switch/>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('HomeScreen')} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Finalizar Cadastro</Text>
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

RegisterScreenSc.navigationOptions = {
  title: 'SecondRegisterPage',
  header: null
};
