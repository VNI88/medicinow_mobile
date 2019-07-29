// Este será meu arquivo principal
import React, {Component} from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginScreen from './components/login_screen';
import RegisterScreenFt from './components/register_screen_ft';
import RegisterScreenSc from './components/register_screen_sc';
import Home from './components/home_screen';
import Settings from './components/settings_screen';
import NewAppointments from './components/new_appointments_screen';

const settingsStackNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  SettingsScreen: Settings
})

const bottomNavigator = createMaterialBottomTabNavigator({
  HomeScreen: Home,
  Appointments: NewAppointments,
  Settings: Settings

},
{
  initialRouteName: 'HomeScreen',
  activeColor: '#389af5',
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'white' },

});

bottomNavigator.navigationOptions = {
  header: null,
}


const stackNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  FirstRegisterPage: RegisterScreenFt,
  SecondRegisterPage: RegisterScreenSc,
  HomeScreen: bottomNavigator
});


const Routes = createAppContainer(
  stackNavigator,
)

export default Routes;
