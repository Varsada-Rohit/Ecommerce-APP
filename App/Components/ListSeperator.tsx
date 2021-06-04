import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomTheme} from '../Config/Colors';

interface Props {}

const ListSeperator: React.FC<Props> = ({}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, {borderBottomColor: colors.grey}]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 0.4,
    opacity: 0.25,
  },
});

export default ListSeperator;
