import React, {FunctionComponent} from 'react';
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput,
} from 'react-native';
import {Controller} from 'react-hook-form';

import colors from '@src/styles/colors';
import UtilsForm from '@src/utils/form';
import styles from './styles';

interface InputContainerProps {
  field: {onChange: (text: string) => void; value: string};
}

type PropFields = {
  control: any;
  name: string;
  required?: boolean;
  error: any;
  placeholder?: string;
  secureText?: boolean;
  message?: boolean;
  iconName?: string;
  textAlign?: 'left' | 'right' | 'center';
  editable?: boolean;
  onInputBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  customBlue?: boolean;
  inputType?: string;
};

const Input: FunctionComponent<PropFields> = ({
  control,
  name,
  required = false,
  error = null,
  placeholder = '',
  secureText = false,
  message,
  textAlign = 'left',
  editable,
  onInputBlur,
  customBlue,
  inputType,
}) => {
  const getInputStyles = () => {
    let inputStyles = styles.input;
    if (!message && error) {
      inputStyles = {...styles.input, ...styles.fieldRequired};
    }
    if (customBlue) {
      inputStyles = {...inputStyles, color: colors.blue, fontWeight: 'bold'};
    }

    return inputStyles;
  };
  const InputContainer = (props: InputContainerProps) => {
    const {
      field: {onChange, value},
    } = props;
    return (
      <View style={styles.container}>
        <View style={styles.customInputContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              onBlur={onInputBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={secureText}
              style={getInputStyles()}
              placeholderTextColor="#c8c8c8"
              editable={editable}
              textAlign={textAlign}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Controller
      control={control}
      rules={{
        required: required ? 'Requerido' : false,
        pattern: UtilsForm.getPattern(inputType),
      }}
      render={InputContainer}
      name={name}
      defaultValue=""
    />
  );
};

export default Input;
