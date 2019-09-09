import React from 'react';
import {Animated, FlatList, Text, TouchableOpacity, I18nManager} from "react-native";

const KeyboardView = ({ keyboardOnPress, keyboardViewStyle, keyboardViewTextStyle, pinLength, onComplete, bgColor, returnType, textColor, animatedDeleteButton, deleteText, animatedDeleteButtonOnPress, styles, onPress, buttonDeletePosition, buttonDeleteStyle, exit, onExit }) => {
  let data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const leftButtonDeletePositions = [deleteText, "0", exit];
  const rightButtonDeletePositions = [exit, "0", deleteText];

  const setButtonDeletePosition = (arrToConcatLeft, arrToConcatRight) => {
    let newData = data;

    if(buttonDeletePosition === "right") {
      newData = [...data, ...arrToConcatRight];

      return newData;
    }

    newData = [...data, ...arrToConcatLeft];
    return newData;
  };

  if(I18nManager.isRTL) {
    data = setButtonDeletePosition(leftButtonDeletePositions, rightButtonDeletePositions).reverse();
  } else {
    data = setButtonDeletePosition(leftButtonDeletePositions, rightButtonDeletePositions);
  }
  const renderItem = ({item, index}) => {
    let style;
    let onPressInactive;
    let onPressKeyboard = () => keyboardOnPress(item, returnType, pinLength, onComplete, onPress);
    let ViewStyles = keyboardViewStyle;

    if(item === deleteText) {
      onPressInactive = animatedDeleteButtonOnPress;
      style = [styles[0], {
        visibility: 'hidden',
        opacity: animatedDeleteButton,
      }];
      ViewStyles = { ...ViewStyles, ...buttonDeleteStyle };
    } else if(item === exit) {
      style = [styles[0], {
        visibility: 'hidden',
      }]
      onPressKeyboard = onExit
    } else if(item === 'empty') {
      onPressInactive = false;
      style = [styles[0], {
        opacity: 0,
      }];
      onPressKeyboard = () => {};
    } else {
      onPressInactive = false;
      style = [styles[0]]
    }
    return (
      <TouchableOpacity
        key={"key-item-" + index}
        activeOpacity={0.9}
        onPress={onPressKeyboard}
        disabled={onPressInactive}>
        <Animated.View style={[style, {
          backgroundColor: bgColor,
        }, ViewStyles]}>
          <Text style={[styles[1], {
            color  : textColor,
            opacity: 1,
          }, keyboardViewTextStyle]}>{item}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  };
  return (
    <FlatList
      contentContainerStyle={{
        flexDirection: I18nManager.isRTL ? 'column-reverse' : 'column',
        alignItems   : I18nManager.isRTL ? 'flex-end' : 'flex-start',
      }}
      scrollEnabled={false}
      horizontal={false}
      vertical={true}
      numColumns={3}
      renderItem={renderItem}
      data={data}
      keyExtractor={(val, index) => "pinViewItem-" + index}
    />
  )
};
export default KeyboardView
