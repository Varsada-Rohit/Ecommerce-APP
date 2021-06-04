import {useTheme} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  title: string;
  subTitle: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AccountDetailList: React.FC<Props> = ({title, subTitle, onPress}) => {
  const {headline4, greyText} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <AppText style={[headline4, styles.heading]}>{title}</AppText>
          <AppText style={greyText}>{subTitle}</AppText>
        </View>
        <Icon
          name="ios-chevron-forward-outline"
          style={{color: colors.grey, fontSize: 20}}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  heading: {
    marginBottom: 3,
  },
});

export default AccountDetailList;
