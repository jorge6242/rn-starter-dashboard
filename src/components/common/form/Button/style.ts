import {StyleSheet} from 'react-native';
import colors, {BLUE} from '../../../../styles/colors';

export default StyleSheet.create({
  root: {
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'relative',
    margin: 0,
    zIndex: 10,
  },
  submit: {
    padding: 13,
    borderColor: '#fff',
    position: 'relative',
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 5,
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  hideSubmitText: {
    color: BLUE,
  },
  spinner: {
    position: 'absolute',
    left: '45%',
    zIndex: 20,
  },
  spinnerText: {},
});
