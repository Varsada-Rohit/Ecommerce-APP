import React, {Ref, useImperativeHandle, useState} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

interface Props {
  children: HTMLElement;
}

export type animationHandler = {
  animateHeart: () => void;
  danimateHeart: () => void;
};

const IconBounce = React.forwardRef(
  ({children}: Props, ref: Ref<animationHandler>) => {
    const [heartAnimateValue, setHeartAnimateValue] = useState(
      new Animated.Value(0),
    );

    useImperativeHandle(ref, () => ({
      animateHeart() {
        Animated.timing(heartAnimateValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.ease,
        }).start();
      },
      danimateHeart() {
        Animated.timing(heartAnimateValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.linear,
        }).start();
      },
    }));

    let finalValue = heartAnimateValue.interpolate({
      inputRange: [0, 0.1, 0.55, 1],
      outputRange: [1, 0.9, 1.3, 1],
    });

    return (
      <Animated.View style={{transform: [{scale: finalValue}]}}>
        {children}
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
});

export default IconBounce;
