import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Text} from 'react-native';
import Header from '../../components/Header';
import MainLayout from '../../hoc/MainLayout';

interface IProps {
  navigation: DrawerNavigationProp<any>;
}

const Profile: React.FC<IProps> = ({navigation}): JSX.Element => {
  const handleLeft = () => navigation.openDrawer();
  return (
    <MainLayout>
      <Header title="Profile" handleleft={handleLeft} />
      <Text style={{textAlign: 'center'}}>Profile Component</Text>
    </MainLayout>
  );
};

export default Profile;
