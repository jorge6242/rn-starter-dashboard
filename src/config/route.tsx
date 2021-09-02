import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';

const Route = (): JSX.Element => {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          iconStyle: {color: '#fff'},
        }}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Text style={{textAlign: 'center'}}>Route Component</Text>
    </View>
  );
};

export default Route;
