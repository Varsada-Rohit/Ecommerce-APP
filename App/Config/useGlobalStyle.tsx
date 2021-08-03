import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {CustomTheme} from './Colors';

const useGlobalStyle = () => {
  const {colors} = useTheme() as CustomTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 15,
    },
    headline3: {
      fontSize: 18,
      fontFamily: 'Metropolis-Medium',
    },
    headline4: {
      fontSize: 16,
      fontFamily: 'Metropolis-Medium',
    },
    greyText: {
      color: colors.grey,
    },
  });

  return styles;
};

export default useGlobalStyle;
