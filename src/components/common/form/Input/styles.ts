import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {isIOS} from '@src/helpers/isIOS';

interface Styles {
  customInputContainer: ViewStyle;
  container: ViewStyle;
  inputContainer: ViewStyle;
  messageContainer: ViewStyle;
  error: TextStyle;
  input: TextStyle;
  fieldRequired: TextStyle;
  iconContainer: ViewStyle;
}

export const inputStyles: Styles = {
  customInputContainer: {position: 'relative'},
  container: {
    width: '100%',
  },
  inputContainer: {position: 'relative'},
  messageContainer: {
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    color: '#000000',
    fontSize: 16,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: isIOS ? 0 : 10,
    height: 45,
    textAlign: 'left',
    width: '100%',
    paddingBottom: 2,
  },
  iconContainer: {
    position: 'absolute',
    top: '28%',
    left: '4%',
  },
  fieldRequired: {
    borderColor: 'red',
    borderWidth: 2,
  },
};

export default StyleSheet.create(inputStyles);
