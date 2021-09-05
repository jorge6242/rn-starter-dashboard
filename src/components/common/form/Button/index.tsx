import React, {FunctionComponent} from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Text, GestureResponderEvent, View} from 'react-native';
import {Spinner} from 'native-base';

import Styles from './style';
import {BLUE} from '../../../../styles/colors';

type Props = {
  loading?: boolean;
  handleSubmit:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  title: string;
  underlayColor?: string;
  spinnerColor?: string;
};

const Button: FunctionComponent<Props> = ({
  loading = false,
  handleSubmit,
  title,
  underlayColor = BLUE,
  spinnerColor = 'white',
}) => {
  return (
    <View style={Styles.root}>
      {loading && (
        <View style={Styles.spinner}>
          <Spinner color={spinnerColor} />
        </View>
      )}

      <View style={Styles.buttonContainer}>
        <TouchableHighlight
          disabled={loading}
          underlayColor={underlayColor}
          onPress={handleSubmit}
          style={Styles.submit}>
          <Text
            style={
              loading
                ? {...Styles.submitText, ...Styles.hideSubmitText}
                : Styles.submitText
            }>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Button;
