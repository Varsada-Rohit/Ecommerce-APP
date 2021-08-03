import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BagCard from '../Components/BagCard';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import {useTheme} from '@react-navigation/native';
import useGlobalStyle from '../Config/useGlobalStyle';
import {CustomTheme} from '../Config/Colors';
import {Icon} from 'native-base';
import AppText from '../Components/AppText';
import {StatusBar} from 'react-native';
import AppButton from '../Components/AppButton';
import {BagStackParamsList} from '../Navigators/BagStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type BagScreenNavigationProp = StackNavigationProp<BagStackParamsList, 'Bag'>;

interface Props {
  navigation: BagScreenNavigationProp;
}

const Bag: React.FC<Props> = ({navigation}) => {
  const {container, greyText, headline3} = useGlobalStyle();
  const {colors} = useTheme() as CustomTheme;

  return (
    <View style={[container, styles.container]}>
      <Header
        hideBack
        style={{backgroundColor: colors.background}}
        transparent
      />
      <View style={{paddingHorizontal: 15, flex: 1}}>
        <Heading>My Bag</Heading>
        <ScrollView>
          <BagCard />
          <BagCard />
          <BagCard />
        </ScrollView>
        <View
          style={[
            styles.promocodeContainer,
            {backgroundColor: colors.secondary},
          ]}>
          <TextInput
            style={styles.promocode}
            placeholderTextColor={colors.grey}
            placeholder="Enter your promo code"
          />
          <View style={[styles.iconContainer, {backgroundColor: colors.grey}]}>
            <Icon
              name="arrow-forward"
              style={{color: colors.background, fontSize: 24}}
            />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <AppText style={[greyText, {flex: 1}]}>Total amount :</AppText>
          <AppText style={headline3}>200$</AppText>
        </View>
        <AppButton
          title="Check out"
          onPress={() => {
            navigation.navigate('Checkout');
          }}
          style={{marginVertical: 15}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  promocodeContainer: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
    marginVertical: 10,
    borderTopRightRadius: 36,
    borderBottomRightRadius: 36,
    height: 36,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promocode: {
    flex: 1,
    paddingHorizontal: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Bag;
