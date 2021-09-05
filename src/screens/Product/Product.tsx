import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Header from '@src/components/Header';
import MainLayout from '@src/hoc/MainLayout';

interface IProps {
  navigation: DrawerNavigationProp<any>;
}

const Product: React.FC<IProps> = ({navigation}): JSX.Element => {
  const handleLeft = () => navigation.openDrawer();
  return (
    <MainLayout>
      <Header title="Product" handleleft={handleLeft} />
      <Text style={{textAlign: 'center'}}>Product Component</Text>
    </MainLayout>
  );
};

export default Product;
