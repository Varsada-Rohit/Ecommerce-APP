import React from 'react';
import {View, StyleSheet} from 'react-native';
import BackButton from '../Components/BackButton';
import Heading from '../Components/Heading';
import useGlobalStyle from '../Config/useGlobalStyle';
import * as yup from 'yup';
import FormikForm from '../Components/FormikForm';
import FormInput from '../Components/FormInput';
import FormSubmit from '../Components/FormSubmit';
import FormFooter from '../Components/FormFooter';
import AuthFooter from '../Components/AuthFooter';
import useApi from '../Config/useApi';
import {AuthStackParamsList} from '../Navigators/AuthStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import ErrorText from '../Components/ErrorText';

type SigninScreenNavigationProp = StackNavigationProp<
  AuthStackParamsList,
  'Signin'
>;

interface Props {
  navigation: SigninScreenNavigationProp;
}

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

const SignIn: React.FC<Props> = ({navigation}) => {
  const API = useApi();

  const {container} = useGlobalStyle();

  const handleSubmit = async (values: any) => {
    console.log('values', values);

    await API.fetchApi('signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <View style={container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Heading>Sign in</Heading>
      <View style={styles.formContainer}>
        <ErrorText
          errorMsg={API.error ? API.error : ' '}
          style={{textAlign: 'center'}}
        />
        <FormikForm
          initialValues={{email: '', password: ''}}
          onSubmit={values => handleSubmit(values)}
          validationSchema={Schema}>
          <FormInput
            feildName="email"
            name={'email'}
            label={'Email'}
            keyboardType={'email-address'}
          />
          <FormInput feildName="password" name={'key'} label={'Password'} />
          <FormFooter
            text="Forgot your password?"
            onPress={() => navigation.navigate('Signup')}
          />
          <FormSubmit title={'Sign up'} style={{marginTop: 30}} />
        </FormikForm>
      </View>
      <AuthFooter text="or login with social account" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    flexGrow: 1,

    justifyContent: 'center',
  },
});

export default SignIn;
