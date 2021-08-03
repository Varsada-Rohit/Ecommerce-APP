import React, {LegacyRef} from 'react';
import {useTheme} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import useGlobalStyle from '../Config/useGlobalStyle';
import {CustomTheme} from '../Config/Colors';
import FormikForm from './FormikForm';
import FormInput from './FormInput';
import * as yup from 'yup';
import FormSubmit from './FormSubmit';
import ActionsheetHeader from './ActionsheetHeader';

interface Props {}

const Schema = yup.object().shape({
  oldPass: yup.string().required().min(8),
  newPass: yup.string().required().min(8),
  repeatPass: yup
    .string()
    .oneOf([yup.ref('newPass'), null], 'Password must match')
    .required(),
});

const ChangePasswordModal = React.forwardRef(
  ({}: Props, ref: LegacyRef<ActionSheet>) => {
    const {container, headline3, greyText} = useGlobalStyle();
    const {colors} = useTheme() as CustomTheme;

    return (
      <ActionSheet
        closable
        closeAnimationDuration={500}
        animated={true}
        ref={ref}
        containerStyle={{
          ...styles.container,
          backgroundColor: colors.background,
        }}>
        <ActionsheetHeader title={'Password Change'} />
        <FormikForm
          initialValues={{oldPass: '', newPass: '', repeatPass: ''}}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={Schema}>
          <FormInput
            feildName="oldPass"
            placeholder="Old Password"
            style={{marginVertical: 8}}
          />
          <AppText style={[greyText, styles.forgot]}>Forgot Password?</AppText>
          <FormInput
            feildName="newPass"
            placeholder="New Password"
            style={{marginVertical: 8}}
          />
          <FormInput
            feildName="repeatPass"
            placeholder="Repeat Password"
            style={{marginVertical: 8}}
          />
          <FormSubmit title="save password" style={{marginVertical: 25}} />
        </FormikForm>
      </ActionSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  forgot: {
    textAlign: 'right',
    marginBottom: 8,
    marginTop: 4,
  },
});

export default ChangePasswordModal;
