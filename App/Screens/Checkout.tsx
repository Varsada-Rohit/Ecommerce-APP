import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AddressCard from '../Components/AddressCard';
import AppText from '../Components/AppText';
import Header from '../Components/Header';
import useGlobalStyle from '../Config/useGlobalStyle';
import Mastercard from '../Assets/Mastercard';
import Fedex from '../Assets/Fedex';
import Usps from '../Assets/Usps';
import Dhl from '../Assets/Dhl';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../Config/Colors';
import AppButton from '../Components/AppButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {BagStackParamsList} from '../Navigators/BagStackNavigator';
import {Image} from 'react-native';

type CheckoutScreenNavigationProp = StackNavigationProp<
  BagStackParamsList,
  'Checkout'
>;

interface Props {
  navigation: CheckoutScreenNavigationProp;
}

const Checkout: React.FC<Props> = ({navigation}) => {
  const {container, headline4, greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <>
      <Header title="Checkout" hideSearch transparent />
      <View style={[container, styles.container]}>
        <View style={{flex: 1}}>
          <View style={{paddingBottom: 15}}>
            <AppText style={[headline4, styles.heading]}>
              Shipping address
            </AppText>
            <AddressCard
              address={{
                name: 'Jane Doe',
                addressLine1: '3 Newbridge Court',
                addressLine2: 'Chino Hills, CA 91709, United States',
              }}
              change
              onChangeBtn={() => {
                navigation.navigate('Addresses');
              }}
            />
          </View>
          <View style={styles.headingContainer}>
            <AppText style={[headline4, styles.heading]}>Payment</AppText>
            <TouchableOpacity
              onPress={() => {
                // TODO:
              }}>
              <AppText style={{color: colors.error}}>Change</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <View style={[styles.mastercard, {backgroundColor: colors.white}]}>
              <Mastercard />
            </View>
            <AppText style={{marginLeft: 15}}>**** **** **** 3947</AppText>
          </View>
          <AppText style={[headline4, styles.heading]}>Delivery method</AppText>
          <View
            style={[styles.subContainer, {justifyContent: 'space-between'}]}>
            <View style={[styles.delivery, {backgroundColor: colors.white}]}>
              <Fedex />
              <AppText style={[styles.deliveryText, {color: colors.grey}]}>
                2-3 days
              </AppText>
            </View>
            <View style={[styles.delivery, {backgroundColor: colors.white}]}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Usps />
              </View>
              <AppText style={[styles.deliveryText, {color: colors.grey}]}>
                2-3 days
              </AppText>
            </View>
            <View style={[styles.delivery, {backgroundColor: colors.white}]}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Dhl />
              </View>
              <AppText style={[styles.deliveryText, {color: colors.grey}]}>
                2-3 days
              </AppText>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.detail}>
            <AppText style={greyText}>order:</AppText>
            <AppText style={headline4}>112$</AppText>
          </View>
          <View style={styles.detail}>
            <AppText style={greyText}>Delivery:</AppText>
            <AppText style={headline4}>15$</AppText>
          </View>
          <View style={styles.detail}>
            <AppText style={greyText}>Summary:</AppText>
            <AppText style={headline4}>127$</AppText>
          </View>
        </View>
        <AppButton
          title="submit order"
          onPress={() => {
            navigation.navigate('OrderSuccess');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  heading: {
    marginVertical: 8,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mastercard: {
    width: 65,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    zIndex: 5,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    marginBottom: 15,
  },
  detail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  delivery: {
    paddingVertical: 15,
    width: '30%',
    borderRadius: 8,
    zIndex: 5,
    alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'stretch',
  },
  deliveryText: {
    fontSize: 11,
    marginTop: 8,
  },
});

export default Checkout;
