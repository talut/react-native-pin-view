import React from 'react';
import {Animated, I18nManager, Text} from "react-native";

const InputView = ({pinViewAnim, inputViewStyle, inputTextStyle, showInputs, inputtedValues, animatedInputIndex, pinLength, bgColor, activeBgColor, styles, bgOpacity}) => {
  const tilt = pinViewAnim.interpolate({
    inputRange : [0, 0.3, 0.6, 0.9],
    outputRange: [0, -50, 50, 0]
  });
  const inactiveInput = (index) => {
    return <Animated.View
        key={"passwordItem-" + index}
        style={[styles[1], {
          backgroundColor: bgColor,
          opacity        : bgOpacity,
        }, inputViewStyle]}/>;
  };

  const activeInput = (index) => {
    if(showInputs) {
      return (
          <Animated.View
              key={"passwordItem-" + index}
              style={[styles[2], {
                backgroundColor: activeBgColor,
                opacity        : 1,
              }, inputViewStyle]}>
            <Text style={inputTextStyle}>{inputtedValues[index]}</Text>
          </Animated.View>
      )
    } else {
      return <Animated.View
          key={"passwordItem-" + index}
          style={[styles[2], {
            backgroundColor: activeBgColor,
            opacity        : 1,
          }, inputViewStyle]}/>
    }
  };
  const ShowInput = (pinLength) => {
    let table = [];
    {
      for(let i = 0; i < pinLength; i++) {
        if(animatedInputIndex[i] === undefined) {
          table.push(inactiveInput(i))
        } else {
          table.push(activeInput(i))
        }
      }
    }
    return table
  };

  return (
      <Animated.View style={[styles[0], {
        transform    : [{translateX: tilt}],
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }]}>
        {ShowInput(pinLength)}
      </Animated.View>
  )

};

export default InputView