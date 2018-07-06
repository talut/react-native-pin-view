import React from 'react';
import { Animated } from "react-native";

const InputView = ({pinViewAnim, animatedInputIndex, password, bgColor, activeBgColor, styles, bgOpacity}) => {
  const tilt = pinViewAnim.interpolate({
    inputRange : [0, 0.3, 0.6, 0.9],
    outputRange: [0, -50, 50, 0]
  });
  return (
    <Animated.View style={ [styles[0], {
      transform: [{translateX: tilt}]
    }] }>
      {
        password.map((val, index) => {
          if (animatedInputIndex[index] === undefined) {
            return (
              <Animated.View
                key={ "passwordItem-" + index }
                style={ [styles[1], {
                  backgroundColor: bgColor,
                  opacity        : bgOpacity
                }] }/>
            )
          } else {
            return (
              <Animated.View
                key={ "passwordItem-" + index }
                style={ [styles[2], {
                  backgroundColor: activeBgColor,
                  opacity        : 1
                }] }/>
            )
          }
        })
      }
    </Animated.View>
  )
};

export default InputView