import React from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// datas
let userInput = [];
let userInputActives = [];
let inputAnim = new Animated.Value(0.3);
const PinView = (props) => {
  const {password, onSuccess, onFailure} = props;
  return (
    <View style={ {
      flexDirection: 'column'
    } }>
      <PasswordInputView data={ password }/>
      <KeyboardView password={ password } onSuccess={ onSuccess } onFailure={ onFailure }/>
    </View>
  )
};


const PasswordInputView = ({data}) => {
  return (
    <View style={ styles.passwordInputView }>
      {
        data.map((val, index) => {
          if (userInputActives.includes(index)) {
            return (
              <Animated.View key={ "passwordItem-" + index } style={ [styles.passwordInputViewItemActive, {
                opacity: inputAnim
              }] }/>
            )
          } else {
            return (
              <Animated.View key={ "passwordItem-" + index } style={ [styles.passwordInputViewItem, {
                opacity: inputAnim
              }] }/>
            )
          }

        })
      }
    </View>
  )
};

const KeyboardView = ({password, onSuccess, onFailure}) => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "SİL", "0", "GİR"];
  return (
    <FlatList
      scrollEnabled={ false }
      style={ {
        paddingHorizontal: 0
      } }
      horizontal={ false }
      vertical={ true }
      numColumns={ 3 }
      contentContainerStyle={ styles.keyboardView }
      renderItem={ ({item, index}) => {
        return (
          <TouchableOpacity onPress={ () => keyboardOnPress(item, password, onSuccess, onFailure) }>
            <Animated.View style={ [styles.keyboardViewItem] }>
              <Text style={ styles.keyboardViewItemText }>{ item }</Text>
            </Animated.View>
          </TouchableOpacity>
        )
      } }
      data={ data }
      keyExtractor={ (val, index) => "pinViewItem-" + index }
    />
  )
};

const keyboardOnPress = (val, password, onSuccess, onFailure) => {
  if (val === "SİL") {
    alert("SİL")
  } else if (val === "GİR") {
    if (userInput.equals(password)) {
      onSuccess()
    } else {
      onFailure()
    }
  } else {
    if (password.length !== userInput.length) {
      userInput = userInput.concat(parseInt(val));
      userInputActives = userInputActives.concat(userInput.indexOf(parseInt(val)));
    } else {
      alert("STOP")
    }
  }
};

Array.prototype.equals = function (array) {
  return this.length === array.length &&
    this.every(function (this_i, i) { return this_i === array[i] })
};

const styles = StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection    : 'row',
    alignSelf        : 'center',
    paddingHorizontal: 25,
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    margin         : 5,
    width          : 35,
    borderRadius   : 35 / 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    width          : 35,
    margin         : 5,
    borderRadius   : 35 / 2,
    backgroundColor: 'rgba(255,255,255,1)',
  },

  // KeyboardView
  keyboardView        : {
    flexDirection : 'column',
    justifyContent: 'flex-start',
    alignItems    : 'center',
    marginVertical: 25
  },
  keyboardViewItem    : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
    backgroundColor : 'rgba(255,255,255,0.05)',
  },
  keyboardViewItemText: {
    fontSize  : 22,
    fontWeight: '900',
    color     : 'rgba(255,255,255,0.5)'
  },
});

export default PinView