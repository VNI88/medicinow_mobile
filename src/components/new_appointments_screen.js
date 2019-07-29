import React, {Component} from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewAppointments extends Component{
  componentDidMount(){
    BackgroundColor.setColor("#FFFFFF");
  };SettingsSettings

  render(){
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{backgroundColor: '#2E8BFD', height: 60, width: imageWidth, marginBottom: 40}}>
          <Text style={{ padding: 10,fontSize: 25, color: 'white', fontWeight:'bold', alignSelf: 'center'}}>Nova Consulta</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
});

NewAppointments.navigationOptions = {
  title: 'Nova Consulta',
  tabBarIcon: ({ tintColor}) => <Icon name='plus-circle' size={18} color={tintColor} />
};
