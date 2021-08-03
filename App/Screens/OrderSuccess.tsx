import React from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText';
import useGlobalStyle from '../Config/useGlobalStyle';

interface Props {}

const OrderSuccess: React.FC<Props> = ({}) => {
  const {container} = useGlobalStyle();

  return (
    <View style={[container, styles.container]}>
      <StatusBar barStyle="default" />
      <View style={styles.subContainer}>
        <Image source={require('../Assets/bags.png')} />
        <AppText style={styles.heading}>Success!</AppText>
        <AppText style={styles.line}>
          Your order will be delivered soon.
        </AppText>
        <AppText style={styles.line}>Thank you for choosing our app!</AppText>
      </View>
      <AppButton title="continue shopping" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 35,
    fontWeight: '700',
    marginVertical: 10,
  },
  line: {
    lineHeight: 15,
  },
});

export default OrderSuccess;
