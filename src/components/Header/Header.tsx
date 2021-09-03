import React from 'react';

import {Header as HeaderElement} from 'react-native-elements';

interface IHeader {
  title?: string;
  handleleft?: () => void;
}

const Header: React.FC<IHeader> = ({title = '', handleleft}): JSX.Element => {
  return (
    <HeaderElement
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        iconStyle: {color: '#fff'},
        onPress: () => (handleleft ? handleleft() : {}),
      }}
      centerComponent={{text: title, style: {color: '#fff'}}}
    />
  );
};

export default Header;
