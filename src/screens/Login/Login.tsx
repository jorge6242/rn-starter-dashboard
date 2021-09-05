import React, {useState} from 'react';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useForm} from 'react-hook-form';

import Input from '@src/components/common/form/Input';
import {Container, TextLogin, InputContainer} from './styles';
import {Button} from 'react-native-elements/dist/buttons/Button';
import sitemap from '../../route/sitemap';

interface IProps {
  navigation: DrawerNavigationProp<any>;
}

type FormData = {
  username: string;
  password: string;
};

const Login: React.FC<IProps> = ({navigation}): JSX.Element => {
  /* States */
  const [loading, setLoading] = useState<boolean>(false);

  /* Form */
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>();

  const submit = (form: FormData) => {
    navigation.navigate(sitemap.dashboard);
  };

  return (
    <Container>
      <TextLogin>Login</TextLogin>
      <InputContainer>
        <Input
          control={control}
          name="username"
          required
          error={errors.username ? errors.username.message : null}
          placeholder="Usuario"
          inputType="email"
        />
      </InputContainer>
      <InputContainer>
        <Input
          control={control}
          name="password"
          required
          error={errors.password ? errors.password.message : null}
          placeholder="Clave"
          inputType="password"
        />
      </InputContainer>
      <Button
        title="Login"
        loading={loading}
        style={{backgroundColor: '#2980b9', marginTop: 10, borderRadius: 5}}
        onPress={handleSubmit(submit)}
      />
    </Container>
  );
};

export default Login;
