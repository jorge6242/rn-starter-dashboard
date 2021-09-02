import React from 'react';
import {Text, View} from 'react-native';
import {Header as HeaderElement} from 'react-native-elements';

interface IHeader {
  title?: string;
}

const Header: React.FC<IHeader> = ({title = ''}): JSX.Element => (
  <HeaderElement
    leftComponent={{
      icon: 'menu',
      color: '#fff',
      iconStyle: {color: '#fff'},
    }}
    centerComponent={{text: title, style: {color: '#fff'}}}
  />
);

export default Header;
