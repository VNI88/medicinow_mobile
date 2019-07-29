import React, {Component} from 'react';
import { Dimensions, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import ViewPager from "@react-native-community/viewpager";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component{
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
          <Text style={{ padding: 10,fontSize: 25, color: 'white', fontWeight:'bold', alignSelf: 'center'}}>Minhas Consultas</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{ alignContent: 'center'}}>
          <View style={{height: 350, width: imageWidth}}>
            <View style={{height: 300, width: 375, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, alignSelf: 'center'}}>
              <Text style={{color:'black'}}> Você não possui consultas agendadas. Pressione Novas Consultas para agendar. </Text>
            </View>
          </View>
          <View style={{height: 350, width: imageWidth}}>
            <View style={{height: 300, width: 375, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, alignSelf: 'center'}}>
            </View>
          </View>
        </ScrollView>
      </View>
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

Home.navigationOptions = {
  title: 'Consultas',
  tabBarIcon: ({ tintColor}) => <Icon name='calendar' size={18} color={tintColor} />
};
