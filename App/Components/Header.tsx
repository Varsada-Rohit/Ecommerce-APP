import {useNavigation, useTheme} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  hideBack?: Boolean;
  hideSearch?: Boolean;
  title?: string;
  onBackbtnPress?: Function;
}

const Header: React.FC<Props> = ({
  hideBack,
  title,
  hideSearch,
  onBackbtnPress,
}) => {
  const {colors, dark} = useTheme() as CustomTheme;
  const {headline3} = useGlobalStyle();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: colors.secondary}]}>
      <StatusBar
        backgroundColor={colors.secondary}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Icon
        name="ios-chevron-back"
        style={{
          color: colors.text,
          textAlign: 'left',
          margin: 10,
          height: !hideBack ? 'auto' : 0,
        }}
        onPress={() =>
          onBackbtnPress ? onBackbtnPress() : navigation.goBack()
        }
      />

      {title && <AppText style={headline3}>{title}</AppText>}
      <Icon
        name="search-sharp"
        style={{
          color: colors.text,
          margin: 10,
          height: !hideSearch ? 'auto' : 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
});

export default Header;
