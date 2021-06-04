import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import * as yup from 'yup';
import AuthFooter from '../Components/AuthFooter';
import BackButton from '../Components/BackButton';
import ErrorText from '../Components/ErrorText';
import FormFooter from '../Components/FormFooter';
import FormikForm from '../Components/FormikForm';
import FormInput from '../Components/FormInput';
import FormSubmit from '../Components/FormSubmit';
import Heading from '../Components/Heading';
import useApi from '../Config/useApi';
import {AuthStackParamsList} from '../Navigators/AuthStackNavigator';

type SignupScreenNavigationProp = StackNavigationProp<
  AuthStackParamsList,
  'Signup'
>;

interface Props {
  navigation: SignupScreenNavigationProp;
}

const Schema = yup.object().shape({
  dname: yup.string().required().label('name'),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

const SignUp: React.FC<Props> = ({navigation}) => {
  const API = useApi();

  const handleSubmit = async (values: any) => {
    let body = {
      name: values.dname,
      email: values.email,
      password: values.password,
    };
    API.fetchApi('signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Heading>Sign up</Heading>
      <View style={styles.formContainer}>
        <ErrorText
          errorMsg={API.error ? API.error : ' '}
          style={{textAlign: 'center'}}
        />
        <FormikForm
          initialValues={{dname: '', email: '', password: ''}}
          onSubmit={values => handleSubmit(values)}
          validationSchema={Schema}>
          <FormInput feildName="dname" label="Name" />
          <FormInput
            feildName="email"
            label={'Email'}
            keyboardType={'email-address'}
          />
          <FormInput feildName="password" label={'Password'} />
          <FormFooter
            text="Already have an account?"
            onPress={() => navigation.navigate('Signin')}
          />
          <FormSubmit title={'Sign up'} style={{marginTop: 30}} disabled />
        </FormikForm>
      </View>
      <AuthFooter text={'or sign up with social account'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    // height: Dimensions.get('window').height,
  },

  formContainer: {
    flexGrow: 1,

    justifyContent: 'center',
  },
});

export default SignUp;
