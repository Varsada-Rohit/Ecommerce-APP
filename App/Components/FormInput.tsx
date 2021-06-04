import {useFormikContext} from 'formik';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';

interface Props {
  feildName: string;
  [x: string]: any;
}

const FormInput: React.FC<Props> = ({feildName, ...otherPerameters}) => {
  const {setFieldTouched, setFieldValue, touched, values, errors} =
    useFormikContext<FormValues>();

  return (
    <>
      <AppTextInput
        onChangeText={(input: any) => setFieldValue(feildName, input)}
        value={values.name}
        onBlur={() => {
          setFieldTouched(feildName);
        }}
        {...otherPerameters}
        error={
          touched[feildName] && errors[feildName]
            ? errors[feildName]
            : undefined
        }
      />
    </>
  );
  ('');
};

const styles = StyleSheet.create({
  container: {},
});

type FormValues = {
  [key: string]: any;
  projectName: string;
  dueDate: string;

  auditor: string;
  tags: string[];
};

export default FormInput;
