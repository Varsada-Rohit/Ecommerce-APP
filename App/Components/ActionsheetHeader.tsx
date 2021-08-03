import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  title: String;
}

const ActionsheetHeader: React.FC<Props> = ({title}) => {
  const {container, headline3} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <>
      <View style={[styles.line, {backgroundColor: colors.grey}]}></View>
      <AppText style={[headline3, styles.heading]}>{title}</AppText>
    </>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 6,
    width: 60,
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 2,
    marginBottom: 10,
  },
});

export default ActionsheetHeader;
