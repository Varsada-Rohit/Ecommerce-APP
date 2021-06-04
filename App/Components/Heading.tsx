import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from './AppText';

interface Props {}

const Heading: React.FC<Props> = ({children}) => {
  return <AppText style={styles.container}>{children}</AppText>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontFamily: 'Metropolis-Bold',
    marginVertical: 20,
  },
});

export default Heading;
