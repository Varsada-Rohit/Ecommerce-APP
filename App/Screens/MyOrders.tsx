import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Chip from '../Components/Chip';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import OrderCard from '../Components/OrderCard';
import useGlobalStyle from '../Config/useGlobalStyle';
import {ProfileStackParamsList} from '../Navigators/ProfileStack';

export type MyOrdersoutScreenNavigationProp = StackNavigationProp<
  ProfileStackParamsList,
  'MyOrders'
>;

interface Props {
  navigation: MyOrdersoutScreenNavigationProp;
}

const MyOrders: React.FC<Props> = ({navigation}) => {
  const [orderStatus, setOrderStatus] = useState('Delivered');
  const {container} = useGlobalStyle();

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header transparent />
      <View style={{paddingHorizontal: 10}}>
        <View>
          <Heading>My orders</Heading>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {['Delivered', 'Processing', 'Cancelled'].map(status => (
              <Chip
                key={status}
                text={status}
                active={orderStatus == status}
                onPress={() => {
                  setOrderStatus(status);
                }}
              />
            ))}
          </View>
        </View>
        <View style={styles.orderList}>
          <OrderCard navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  orderList: {
    marginVertical: 20,
  },
});

export default MyOrders;
