import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../Components/AppText';
import SaleCard from '../Components/SaleCard';
import SubCategoryCard from '../Components/SubCategoryCard';
import useGlobalStyle from '../Config/useGlobalStyle';
import {ShopStackParamsList} from '../Navigators/ShopStackNavigator';

type WomenScreenNavigationProp = StackNavigationProp<
  ShopStackParamsList,
  'CategoryTopTab'
>;

interface Props {
  navigation: WomenScreenNavigationProp;
}

const WomensCategory: React.FC<Props> = ({navigation}) => {
  const {container} = useGlobalStyle();

  return (
    <View style={[container, styles.container]}>
      <SaleCard title="SUMMER SALES" subtitle="up to 50% off" />
      <SubCategoryCard
        onPress={() => navigation.navigate('SubSubCategory')}
        name="New"
        image={require('../Assets/subCategory/new.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default WomensCategory;
