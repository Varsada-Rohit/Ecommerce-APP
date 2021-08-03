import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextStyle} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../Config/Colors';

interface Props {
  style?: TextStyle[] | TextStyle;
}

const AppText: React.FC<Props> = ({style, children}) => {
  const {colors} = useTheme();

  return (
    <Text style={[styles.container, {color: colors.text}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Metropolis-Regular',
  },
});

export default AppText;
