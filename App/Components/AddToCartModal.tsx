import {useTheme} from '@react-navigation/native';
import React, {LegacyRef, useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {TypeOf} from 'yup';
import {number} from 'yup/lib/locale';
import {CustomTheme} from '../Config/Colors';
import AccountDetailList from './AccountDetailList';
import ActionsheetHeader from './ActionsheetHeader';
import AppButton from './AppButton';
import AppText from './AppText';
import ListSeperator from './ListSeperator';

interface Props {
  onAdd: Function;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const AddToCartModal = React.forwardRef(
  ({onAdd}: Props, ref: LegacyRef<ActionSheet>) => {
    const {colors} = useTheme() as CustomTheme;
    const [selectedSize, setSelectedSize] = useState<string>();

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
        <ActionsheetHeader title="Select size" />
        <View style={styles.sizeContainer}>
          {sizes.map(size => {
            return (
              <TouchableWithoutFeedback
                onPress={() => setSelectedSize(size)}
                key={size}>
                <View
                  style={[
                    styles.size,
                    selectedSize === size
                      ? {backgroundColor: colors.primary}
                      : {},
                    {
                      borderColor:
                        selectedSize === size ? colors.primary : colors.grey,
                    },
                  ]}>
                  <AppText>{size}</AppText>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <ListSeperator />
        <AccountDetailList title="Size info" subTitle="" onPress={() => {}} />
        <ListSeperator />
        <AppButton
          title="add to cart"
          style={{marginVertical: 20, marginHorizontal: 15}}
          onPress={() => {
            onAdd();
          }}
        />
      </ActionSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
  sizeContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',

    flexWrap: 'wrap',
    marginVertical: 8,
  },
  size: {
    minWidth: '24%',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: '3%',
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 0.5,
  },
});

export default AddToCartModal;
