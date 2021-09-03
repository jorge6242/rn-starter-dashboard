import {StyleSheet} from 'react-native';
import {BLACK, GREY} from '../../styles/colors';

export default StyleSheet.create({
  drawerItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  drawerItem: {borderBottomColor: GREY, borderBottomWidth: 1, color: BLACK},
  labelItem: {color: BLACK},
});
