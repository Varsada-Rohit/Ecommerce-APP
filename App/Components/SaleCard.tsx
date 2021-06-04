import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import AppText from './AppText';

interface Props {
  title: string;
  subtitle: string;
}

const SaleCard: React.FC<Props> = ({title, subtitle}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <AppText style={[styles.title, {color: colors.white}]}>{title}</AppText>
      <AppText style={{color: colors.white}}>{subtitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    elevation: 25,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
});

export default SaleCard;
