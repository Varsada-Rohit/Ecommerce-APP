import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppButton from './AppButton';
import AppText from './AppText';

interface Props {}

const OrderCard: React.FC<Props> = ({}) => {
  const {greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={[styles.row, {marginBottom: 15}]}>
        <AppText style={[styles.bold, styles.left]}>Order №1947034</AppText>
        <AppText style={greyText}>05-12-2019</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={greyText}>Tracking number: </AppText>
        <AppText style={styles.bold}>IW3475453455</AppText>
      </View>
      <View style={styles.row}>
        <View style={[styles.left, styles.row]}>
          <AppText style={greyText}>Quantity: </AppText>
          <AppText style={styles.bold}>3</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={greyText}>Total Amount: </AppText>
          <AppText style={styles.bold}>112$</AppText>
        </View>
      </View>
      <View style={[styles.row, {alignItems: 'center'}]}>
        <View style={styles.left}>
          <View style={{flexDirection: 'row'}}>
            <AppButton
              title="Details"
              textStyle={[styles.buttonText, {color: colors.text}]}
              style={[styles.button, {borderColor: colors.text}]}
              onPress={() => {}}
            />
          </View>
        </View>
        <AppText style={{color: colors.success}}>Delivered</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    elevation: 4,
    borderRadius: 8,
  },
  bold: {
    fontSize: 16,
    fontFamily: 'Metropolis-SemiBold',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  left: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 30,
    marginVertical: 0,
    elevation: 0,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
});

export default OrderCard;
