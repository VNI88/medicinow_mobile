import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import BackgroundColor from 'react-native-background-color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Divider, Button, Card } from 'react-native-elements';

const medicinow_logo = require("../images/medicinow_logo.png");
const google_icon = require("../images/google_icon.png");
const facebook_icon = require("../images/facebook_icon.png");

export default class LoginScreen extends Component{
  componentDidMount(){
    BackgroundColor.setColor("#FFFFFF");
  };

  render(){
    return (
      <View style={styles.container}>
        <Image source={medicinow_logo} style={styles.imagePosition} />

        <Input placeholder='E-mail' containerStyle={styles.inputFormatting} inputStyle={styles.textFormatting}  leftIcon={
          <Icon name='user' size={24} color='white' style={styles.iconPosition}/>
        }/>

        <Input placeholder='Senha' maxLength={8} secureTextEntry={true} containerStyle={styles.inputFormatting} inputStyle={styles.textFormatting} leftIcon={
          <Icon name='lock' size={24} color='white' style={styles.iconPosition} />
        }/>

        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30}}>
          <TouchableOpacity style={{height:22, width:29.12 }}>
            <Image source={google_icon}  />
          </TouchableOpacity>

          <Divider style={{ marginLeft:40, marginRight:40}} />

          <TouchableOpacity style={{height:32, width:51 }}>
            <Image source={facebook_icon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text > Esqueci minha senha.</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row'}}>
          <Text> Novo por aqui? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('FirstRegisterPage')}>
            <Text style={{color:'#D9D4D4'}}> Cadastre-se </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#2E8BFD'
  },
  imagePosition: {
    marginTop: 35,
    height: 150
  },
  inputFormatting: {
    paddingHorizontal: 40
  },
  textFormatting: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 40
  },
  buttonContainer: {
    marginTop:40,
    width:223,
    height:48,
    backgroundColor:'#FFFBFB',
    alignItems: 'center',
    borderRadius: 42
  },
  buttonText: {
    color:'#5CA8DF',
    fontSize: 20,
    padding: 10
  },
  iconPosition: {
    marginTop: 40,
    // paddingRight:20
  }
});

LoginScreen.navigationOptions = {
  title: 'LoginScreen',
  header: null
};
