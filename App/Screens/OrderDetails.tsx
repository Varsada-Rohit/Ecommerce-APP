import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppText from '../Components/AppText';
import BagCard from '../Components/BagCard';
import Header from '../Components/Header';
import useGlobalStyle from '../Config/useGlobalStyle';
import Mastercard from '../Assets/Mastercard';
import AppButton from '../Components/AppButton';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../Config/Colors';

interface Props {}

const OrderDetails: React.FC<Props> = ({}) => {
  const {container, headline4, greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <>
      <Header title="Order Details" />
      <ScrollView style={[container, styles.container]}>
        <View style={styles.line}>
          <AppText style={headline4}>Order №1947034</AppText>
          <AppText style={greyText}>05-12-2019</AppText>
        </View>
        <View style={styles.line}>
          <AppText>
            <AppText style={greyText}>Tracking number:</AppText>
            <AppText style={[headline4]}>{'  '}IW3475453455</AppText>
          </AppText>
        </View>
        <View style={styles.line}>
          <AppText>
            <AppText style={greyText}>Quantity:</AppText>

            <AppText style={headline4}>{'  '}3</AppText>
          </AppText>
          <AppText>
            <AppText style={greyText}>Total Amount:</AppText>

            <AppText style={headline4}>{'  '}112$</AppText>
          </AppText>
        </View>
        <View style={{marginVertical: 10}}>
          <AppText>3 items</AppText>
          <BagCard />
          <BagCard />
          <BagCard />
        </View>
        <View style={{marginVertical: 10}}>
          <AppText style={{marginBottom: 8}}>Order information</AppText>
          <View style={[styles.info, {alignItems: 'flex-start'}]}>
            <AppText style={[greyText, {width: '40%'}]}>
              Shipping Address:
            </AppText>
            <AppText style={styles.detail}>
              3 Newbridge Court ,Chino Hills, CA 91709, United States
            </AppText>
          </View>
          <View style={styles.info}>
            <AppText style={[greyText, {width: '40%'}]}>
              Payment method:
            </AppText>
            <Mastercard />
            <AppText style={[styles.detail, {marginLeft: 15}]}>
              **** **** **** 3947
            </AppText>
          </View>
          <View style={styles.info}>
            <AppText style={[greyText, {width: '40%'}]}>
              Delivery method:
            </AppText>

            <AppText style={[styles.detail]}>FedEx, 3 days, 15$</AppText>
          </View>
          <View style={styles.info}>
            <AppText style={[greyText, {width: '40%'}]}>Discount:</AppText>

            <AppText style={[styles.detail]}>10%, Personal promo code</AppText>
          </View>
          <View style={styles.info}>
            <AppText style={[greyText, {width: '40%'}]}>Total Amount:</AppText>

            <AppText style={[styles.detail]}>133$</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'space-between',
          }}>
          <AppButton
            title="Reorder"
            style={[styles.btn, {borderColor: colors.text}]}
            textStyle={{textTransform: 'capitalize', fontSize: 14}}
            onPress={() => {}}
            innerStyle={{paddingVertical: 8}}
          />
          <AppButton
            title="Leave Feedback"
            style={{
              width: '47%',
              borderWidth: 1,
              borderColor: colors.primary,
            }}
            innerStyle={{paddingVertical: 8}}
            textStyle={{textTransform: 'capitalize', fontSize: 14}}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  btn: {
    width: '47%',
    backgroundColor: 'transparent',
    elevation: 0,
    borderWidth: 1,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  info: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  detail: {width: '60%', lineHeight: 20},
});

export default OrderDetails;
