import React, {useRef} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import ChangePasswordModal from '../Components/ChangePasswordModal';
import Header from '../Components/Header';
import Heading from '../Components/Heading';
import useGlobalStyle from '../Config/useGlobalStyle';

interface Props {}

const Settings: React.FC<Props> = ({}) => {
  const changePasswordref = useRef<ActionSheet>(null);
  const [salesNotifications, setSalesNotifications] = useState(true);
  const [newArrivalsNoti, setNewArrivalsNoti] = useState(false);
  const {container, headline4, greyText} = useGlobalStyle();
  const [deliveryNoti, setDeliveryNoti] = useState(false);

  return (
    <>
      <Header transparent />
      <View style={[container, styles.container]}>
        <Heading>Settings</Heading>
        <AppText style={[headline4, {marginVertical: 8}]}>
          Personal Information
        </AppText>
        <AppTextInput label="Full name" />
        <AppTextInput label="Date of Birth" />
        <View style={styles.passwordHeader}>
          <AppText style={headline4}>Password</AppText>
          <TouchableOpacity onPress={() => changePasswordref.current?.show()}>
            <AppText style={greyText}>Change</AppText>
          </TouchableOpacity>
        </View>
        <AppTextInput label="Password" />
        <AppText style={[headline4, {marginVertical: 8, marginTop: 35}]}>
          Notifications
        </AppText>
        <View style={styles.notification}>
          <AppText>Sales</AppText>
          <Switch
            value={salesNotifications}
            onChange={e => {
              setSalesNotifications(!salesNotifications);
            }}
          />
        </View>
        <View style={styles.notification}>
          <AppText>New arrivals</AppText>
          <Switch
            value={newArrivalsNoti}
            onChange={() => setNewArrivalsNoti(!newArrivalsNoti)}
          />
        </View>
        <View style={styles.notification}>
          <AppText>Delivery status changes</AppText>
          <Switch
            value={deliveryNoti}
            onChange={() => setDeliveryNoti(!deliveryNoti)}
          />
        </View>
      </View>
      <ChangePasswordModal ref={changePasswordref} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginTop: 35,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});

export default Settings;
