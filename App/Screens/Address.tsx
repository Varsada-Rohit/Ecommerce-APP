import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AddressCard from '../Components/AddressCard';
import AppText from '../Components/AppText';
import Header from '../Components/Header';
import useGlobalStyle from '../Config/useGlobalStyle';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BagStackParamsList} from '../Navigators/BagStackNavigator';

type AddressScreenNavigationProp = StackNavigationProp<
  BagStackParamsList,
  'Bag'
>;

interface Props {
  navigation: AddressScreenNavigationProp;
}

let addresses = [
  {
    name: 'Jane Doe',
    addressLine1: '3 Newbridge Court',
    addressLine2: 'Chino Hills, CA 91709, United States',
  },
  {
    name: 'John Doe',
    addressLine1: '3 Newbridge Court',
    addressLine2: 'Chino Hills, CA 91709, United States',
  },
  {
    name: 'John Doe',
    addressLine1: '51 Riverside',
    addressLine2: 'Chino Hills, CA 91709, United States',
  },
];

const Address: React.FC<Props> = ({navigation}) => {
  const [defaultAdd, setDefaultAdd] = useState<number>();
  const {colors} = useTheme();

  const {container} = useGlobalStyle();
  return (
    <>
      <Header title="Shipping Addresses" transparent hideSearch />

      <View style={[container, styles.container]}>
        {addresses.map((add, index) => {
          return (
            <AddressCard
              selected={defaultAdd == index}
              address={add}
              key={index.toString()}
              setDefault={() => setDefaultAdd(index)}
              onEditBtn={() => navigation.navigate('AddAddress')}
            />
          );
        })}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddAddress')}
          style={[styles.addAddress, {backgroundColor: colors.text}]}>
          <AppText style={[styles.add, {color: colors.background}]}>+</AppText>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  addAddress: {
    width: 40,
    height: 40,
    backgroundColor: 'pink',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    zIndex: 10,
  },
  add: {
    fontSize: 30,
  },
});

export default Address;
