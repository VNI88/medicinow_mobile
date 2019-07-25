// Este será meu arquivo principal
import React, {Component} from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './components/login_screen'
import RegisterScreenFt from './components/register_screen_ft'
import RegisterScreenSc from './components/register_screen_sc'

const Routes = createAppContainer(
  createStackNavigator({
    LoginScreen: LoginScreen,
    FirstRegisterPage: RegisterScreenFt,
    SecondRegisterPage: RegisterScreenSc
  })
);

export default Routes;
