import {useTheme} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  onPress?: (e?: any) => any;
}

const BackButton: React.FC<Props> = ({onPress}) => {
  const {colors} = useTheme();

  return (
    <Icon
      onPress={onPress}
      name="ios-chevron-back"
      style={{color: colors.text, marginVertical: 10}}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BackButton;
