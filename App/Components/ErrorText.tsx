import {useTheme} from '@react-navigation/native';
import {FormikErrors} from 'formik';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {CustomTheme} from '../Config/Colors';

interface Props {
  errorMsg?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  style?: object;
}

const ErrorText: React.FC<Props> = ({errorMsg, style}) => {
  const {colors} = useTheme() as CustomTheme;

  if (!errorMsg) {
    return null;
  }
  return (
    <Text style={[{color: colors.error}, styles.container, style]}>
      {errorMsg}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    fontFamily: 'Metropolis-Regular',
    fontSize: 14,
  },
});

export default ErrorText;
