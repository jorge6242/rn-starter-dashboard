import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Styles from './styles';
import {Text} from 'react-native';
import sitemap from '../../route/sitemap';
import Profile from '../Profile';
import Product from '../Product';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  /*  Functions  */
  const handleNavigation = (path: string) => {
    props.navigation.toggleDrawer();
    props.navigation.navigate(path);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text style={Styles.drawerItemTitle}>Menu</Text>
      <DrawerItem
        label="Profile"
        labelStyle={Styles.labelItem}
        style={Styles.drawerItem}
        onPress={() => handleNavigation(sitemap.profile)}
      />
      <DrawerItem
        label="Product"
        labelStyle={Styles.labelItem}
        style={Styles.drawerItem}
        onPress={() => handleNavigation(sitemap.product)}
      />
    </DrawerContentScrollView>
  );
};

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
      initialRouteName={sitemap.profile}>
      <Drawer.Screen
        name={sitemap.profile}
        component={Profile}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen
        name={sitemap.product}
        component={Product}
        options={{unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
};
export {Dashboard};
