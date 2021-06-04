import {useTheme} from '@react-navigation/native';
import {FormikErrors} from 'formik';
import {Form, Icon, Input, Item, Label} from 'native-base';
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import ErrorText from './ErrorText';

interface Props {
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  label?: string;
  [x: string]: any;
}

const AppTextInput: React.FC<Props> = ({error, label, ...otherPeramerters}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.secondary,
            borderColor: error ? colors.error : 'transparent',
            borderWidth: 1,
          },
        ]}>
        <Item error={true} floatingLabel style={styles.item}>
          <Label
            style={{
              color: error ? colors.error : colors.grey,
              fontFamily: 'Metropolis-Regular',
            }}>
            {label}
          </Label>
          <Input
            style={[styles.input, {color: colors.text}]}
            {...otherPeramerters}
          />
          {error && (
            <Icon
              style={{
                height: '100%',
              }}
              name="ios-close"
            />
          )}
        </Item>
      </View>
      <ErrorText errorMsg={error} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.41,

    elevation: 2,
    borderRadius: 4,
    padding: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  item: {
    borderBottomWidth: 0,
  },
  input: {
    fontFamily: 'Metropolis-Regular',
  },
});

export default AppTextInput;
