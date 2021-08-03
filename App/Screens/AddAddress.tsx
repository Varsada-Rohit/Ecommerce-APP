import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FormikForm from '../Components/FormikForm';
import FormInput from '../Components/FormInput';
import Header from '../Components/Header';
import useGlobalStyle from '../Config/useGlobalStyle';
import * as yup from 'yup';
import FormSubmit from '../Components/FormSubmit';

interface Props {}

const Schema = yup.object().shape({
  fname: yup.string().min(3).required(),
  address: yup.string().min(3, 'Enter full address').required(),
  city: yup.string().min(3, 'Enter valid city name').required(),
  state: yup.string().min(3, 'Enter valid state name').required(),
  country: yup.string().min(3, 'Enter valid country name').required(),
  pincode: yup.string().max(6).min(6).required(),
});

const AddAddress: React.FC<Props> = ({}) => {
  const {container} = useGlobalStyle();

  const handleSubmit = (values: any) => {
    console.log('====================================');
    console.log('adddd', values);
    console.log('====================================');
  };

  return (
    <>
      <Header title="Adding Shipping Address" transparent hideSearch />
      <ScrollView style={[container, styles.container]}>
        <FormikForm
          initialValues={{
            fname: '',
            address: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
          }}
          onSubmit={values => handleSubmit(values)}
          validationSchema={Schema}>
          <FormInput
            feildName="fname"
            label={'Full name'}
            textContentType="name"
          />
          <FormInput
            feildName="address"
            label={'Address'}
            textContentType="fullStreetAddress"
          />
          <FormInput
            feildName="city"
            label={'City'}
            textContentType="addressCity"
          />
          <FormInput
            feildName="state"
            label={'State'}
            textContentType="addressState"
          />
          <FormInput
            feildName="pincode"
            label={'Zip Code'}
            textContentType="postalCode"
          />
          <FormInput
            feildName="country"
            label={'Country'}
            textContentType="countryName"
          />

          <FormSubmit title="save address" style={{marginTop: 50}} />
        </FormikForm>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default AddAddress;
