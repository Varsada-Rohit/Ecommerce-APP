import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik, FormikHelpers} from 'formik';

interface Props {
  validationSchema: any;
  initialValues: Object;
  onSubmit: (
    values: Object,
    formikHelpers: FormikHelpers<Object>,
  ) => void | Promise<any>;
}

const FormikForm: React.FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {() => <>{children}</>}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormikForm;
