import React from 'react';
import {View} from 'react-native';

interface MainLayoutComponent {}

const MainLayout: React.FC<MainLayoutComponent> = ({children}) => (
  <View>{children}</View>
);

export default MainLayout;
