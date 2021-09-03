import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import sitemap from '../route/sitemap';
import Main from '../screens/Main';
import Dashboard from '../screens/Dashboard';

const {Screen, Navigator} = createStackNavigator();

const Route = (): JSX.Element => (
  <NavigationContainer>
    <Navigator
      screenOptions={{headerShown: false}}
      detachInactiveScreens={false}
      initialRouteName={sitemap.dashboard}>
      <Screen name={sitemap.main} component={Main} />
      <Screen name={sitemap.dashboard} component={Dashboard} />
    </Navigator>
  </NavigationContainer>
);

export default Route;
