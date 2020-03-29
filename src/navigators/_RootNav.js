import React from 'react';
import { Button, Alert } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Register from '../screens/register/_Register'
import Profile from '../screens/profile/_Profile'
import Home from '../screens/_Home'
import Login from '../screens/login/_Login';

import NavService from './navigationService';
import * as COLORS from '../assets/styles/colors'

const RootNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerRight: <Button title="Log Out" color='white' onPress={(navigation) => {
          Alert.alert(
            'Success',
            'Registration Successful! Click OK To Login into Your App.',
            [
              {
                text: 'OK',
                onPress: () => {
                  NavService.reset('root'); 
                },
              },
              {
                text: 'Cancel',
              }
            ],
            { cancelable: false },
          );
        }} />,
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.androidPurple,
      },
      headerTintColor: COLORS.white,
      gesturesEnabled: false,
    },
  },
);
export default createAppContainer(RootNavigator);
