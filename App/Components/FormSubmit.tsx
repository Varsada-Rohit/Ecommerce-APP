import {useFormikContext} from 'formik';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppButton from './AppButton';

interface Props {
  title: string;
  [x: string]: any;
}

const FormSubmit: React.FC<Props> = ({title, ...otherPerameters}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} {...otherPerameters} />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormSubmit;
