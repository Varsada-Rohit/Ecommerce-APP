import {useNavigation, useTheme} from '@react-navigation/native';
import {Icon} from 'native-base';
import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {CustomTheme} from '../Config/Colors';
import useGlobalStyle from '../Config/useGlobalStyle';
import AppText from './AppText';

interface Props {
  hideBack?: Boolean;
  hideSearch?: Boolean;
  title?: string;
  onBackbtnPress?: Function;
  style?: object;
  transparent?: Boolean;
}

const Header: React.FC<Props> = ({
  hideBack,
  title,
  hideSearch,
  onBackbtnPress,
  style,
  transparent,
}) => {
  const {colors, dark} = useTheme() as CustomTheme;
  const {headline3} = useGlobalStyle();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: transparent ? colors.background : colors.secondary,
          elevation: 5,
        },
        style,
      ]}>
      <StatusBar
        translucent={false}
        backgroundColor={transparent ? colors.background : colors.secondary}
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
  },
});

export default Header;
