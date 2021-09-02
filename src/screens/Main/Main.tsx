import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import MainLayout from '../../hoc/MainLayout';

const Main = (): JSX.Element => (
  <MainLayout>
    <Header title="Main" />
    <Text style={{textAlign: 'center'}}>Main Component</Text>
  </MainLayout>
);

export default Main;
