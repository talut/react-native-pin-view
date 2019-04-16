import React from 'react';
import {Animated, View, FlatList, Text, TouchableOpacity, I18nManager} from "react-native";

const KeyboardView = ({keyboardOnPress, keyboardViewStyle, pinLength, onComplete, bgColor, returnType, textColor, animatedDeleteButton, deleteText, animatedDeleteButtonOnPress, styles}) => {
  let data;
  if(I18nManager.isRTL) {
    data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", deleteText, "0", null].reverse();

  } else {
    data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", deleteText, "0"];
  }
  const renderItem = ({item, index}) => {
    let style;
    let onPressInactive;
    if(item === deleteText) {
      onPressInactive = animatedDeleteButtonOnPress;
      style = [styles[0], {
        opacity: animatedDeleteButton
      }]
    } else {
      onPressInactive = false;
      style = [styles[0]]
    }
    return (
        <TouchableOpacity
            key={"key-item-" + index}
            activeOpacity={0.9}
            onPress={() => keyboardOnPress(item, returnType, pinLength, onComplete)}
            disabled={onPressInactive}>
          <Animated.View style={[style, {
            backgroundColor: bgColor,
          }, keyboardViewStyle]}>
            <Text style={[styles[1], {
              color  : textColor,
              opacity: 1,
            }]}>{item}</Text>
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