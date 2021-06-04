import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {CustomTheme} from './Colors';

const useGlobalStyle = () => {
  const {colors} = useTheme() as CustomTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 10,
    },
    headline3: {
      fontSize: 18,
      fontWeight: '700',
    },
    headline4: {
      fontSize: 16,
      fontWeight: '700',
    },
    greyText: {
      color: colors.grey,
    },
  });

  return styles;
};

export default useGlobalStyle;
