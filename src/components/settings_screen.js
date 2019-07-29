import React, {Component} from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Settings extends Component{
  componentDidMount(){
    BackgroundColor.setColor("#FFFFFF");
  };

  render(){
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{backgroundColor: '#2E8BFD', height: 60, width: imageWidth, marginBottom: 40}}>
          <Text style={{ padding: 10,fontSize: 25, color: 'white', fontWeight:'bold', alignSelf: 'center'}}>Configurações</Text>
        </View>
        <View style={{alignItems: 'center'}} >
          <TouchableOpacity>
            <Text style={{fontSize: 25, color: '#7ca3f2'}} >Dados pessoais</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 25, color: '#7ca3f2'}} >Opções de Pagamento</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={{fontSize: 25, color: '#7ca3f2'}} >Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

});

Settings.navigationOptions = {
  title: 'Configurações',
  tabBarIcon: ({ tintColor}) => <Icon name='cog' size={18} color={tintColor} />
};
