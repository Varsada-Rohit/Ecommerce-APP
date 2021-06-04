import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import GoogleIcon from '../Assets/GoogleIcon';
import FaceBookIcon from '../Assets/FaceBookIcon';
import Colors, {CustomTheme} from '../Config/Colors';
import {useTheme} from '@react-navigation/native';

interface Props {
  text: string;
}

const AuthFooter: React.FC<Props> = ({text}) => {
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={styles.container}>
      <AppText>{text}</AppText>
      <View style={styles.socialContainer}>
        <View style={[styles.google, {backgroundColor: colors.white}]}>
          <GoogleIcon />
        </View>
        <View style={[styles.google, {backgroundColor: colors.white}]}>
          <FaceBookIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginBottom: '10%',
  },
  google: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.41,

    elevation: 2,
  },
});

export default AuthFooter;
