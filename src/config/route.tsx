import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import sitemap from '../route/sitemap';
import Main from '../screens/Main';

const {Screen, Navigator} = createStackNavigator();

const Route = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={sitemap.main} component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Route;
