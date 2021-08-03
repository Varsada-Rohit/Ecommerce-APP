import {useTheme} from '@react-navigation/native';
import {CheckBox} from 'native-base';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';

export type address = {
  name: String;
  addressLine1: String;
  addressLine2: String;
};

interface Props {
  selected?: Boolean;
  address: address;
  setDefault?: Function;
  onChangeBtn?: Function;
  onEditBtn?: Function;
  change?: boolean;
}

const AddressCard: React.FC<Props> = ({
  selected,
  address,
  setDefault,
  change,
  onChangeBtn,
  onEditBtn,
}) => {
  const {colors, dark} = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={{flexDirection: 'row'}}>
        <AppText style={{fontFamily: 'Metropolis-Medium', flex: 1}}>
          {address.name}
        </AppText>
        <TouchableOpacity
          onPress={() =>
            onChangeBtn ? onChangeBtn() : onEditBtn ? onEditBtn() : {}
          }>
          <AppText style={{color: colors.error}}>
            {change ? 'change' : 'Edit'}
          </AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <AppText style={{lineHeight: 20}}>{address.addressLine1}</AppText>
        <AppText style={{lineHeight: 20}}>{address.addressLine2}</AppText>
      </View>
      {setDefault && (
        <TouchableOpacity
          style={styles.useDefault}
          onPress={() => (setDefault ? setDefault() : {})}>
          <CheckBox
            style={[
              styles.checkbox,
              selected ? {} : {borderColor: colors.grey},
            ]}
            checked={selected ? true : false}
            color={selected ? (dark ? colors.background : colors.text) : 'none'}
          />
          <AppText style={styles.useDefaultText}>
            Use as the shipping address
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  addressContainer: {
    marginVertical: 7,
  },
  useDefault: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    paddingBottom: 0,
    paddingLeft: 0,
    borderRadius: 3,
    marginLeft: -10,
  },
  useDefaultText: {
    marginLeft: 20,
  },
});

export default AddressCard;
