import React from 'react';
import { Animated, Easing, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class PinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput                  : [],
      animatedInputIndex         : Object.assign([]),
      animatedDeleteButton       : new Animated.Value(0),
      pinViewAnim                : new Animated.Value(0),
      animatedDeleteButtonOnPress: true
    };
    this.keyboardOnPress = this.keyboardOnPress.bind(this);
    this.setDeleteButton = this.setDeleteButton.bind(this);
  }

  userInput = [];
  setDeleteButton = (status) => {
    Animated.timing(
      // Animate value over time
      this.state.animatedDeleteButton, // The value to drive
      {
        toValue : status ? 1 : 0, // Animate to final value of 1
        duration: 100
      }
    ).start(); // Start the animation
    this.setState({
      animatedDeleteButtonOnPress: !status,
    })
  };

  keyboardOnPress = (val, password, onSuccess, onFailure) => {
    if (val === "SİL") {
      this.userInput = this.userInput.slice(0, -1);
      this.setState({
        animatedInputIndex: this.state.animatedInputIndex.slice(0, -1)
      });
      if (this.userInput.length === 0) {
        this.setDeleteButton(false);
      }
    } else {
      if (password.length !== this.userInput.length) {
        this.userInput = this.userInput.concat(parseInt(val));
        Animated.timing(
          // Animate value over time
          this.state.animatedDeleteButton, // The value to drive
          {
            toValue : 1, // Animate to final value of 1
            duration: 300
          }
        ).start(); // Start the animation
        this.setState({
          animatedDeleteButtonOnPress: false,
          animatedInputIndex         : this.state.animatedInputIndex.concat(this.userInput.indexOf(parseInt(val)))
        });
        if (this.userInput.length === password.length) {
          if (this.userInput.equals(password)) {
            onSuccess()
          } else {
            Animated.timing(
              // Animate value over time
              this.state.pinViewAnim, // The value to drive
              {
                toValue : 1, // Animate to final value of 1
                easing  : Easing.linear,
                duration: 200
              }
            ).start(); // Start the animation
            setTimeout(() => {
              this.state.pinViewAnim.setValue(0)
            }, 200);
            this.setState({
              statusText: 'HATA'
            });
            onFailure()
          }
        }
      }
    }
  };

  render() {
    const {password, onSuccess, onFailure, disabled} = this.props;
    const tilt = this.state.pinViewAnim.interpolate({
      inputRange : [0, 0.3, 0.6, 0.9],
      outputRange: [0, -50, 50, 0]
    });
    return (
      <View style={ {
        flexDirection: 'column',
        height       : 'auto'
      } }
            pointerEvents={ disabled ? "none" : undefined }
      >
        <Animated.View style={ [styles.passwordInputView, {
          transform: [{translateX: tilt}]
        }] }>
          {
            password.map((val, index) => {
              if (this.state.animatedInputIndex[index] === undefined) {
                return (
                  <Animated.View
                    key={ "passwordItem-" + index }
                    style={ styles.passwordInputViewItem }/>
                )
              } else {
                return (
                  <Animated.View
                    key={ "passwordItem-" + index }
                    style={ styles.passwordInputViewItemActive }/>
                )
              }
            })
          }
        </Animated.View>
        <View style={ {
          alignItems    : 'center',
          alignSelf     : 'center',
          justifyContent: 'center'
        } }>
          <KeyboardView
            animatedDeleteButton={ this.state.animatedDeleteButton }
            password={ password }
            onSuccess={ onSuccess }
            onFailure={ onFailure }
            animatedDeleteButtonOnPress={ this.state.animatedDeleteButtonOnPress }
            keyboardOnPress={ this.keyboardOnPress }/>
        </View>
      </View>
    )
  }
}

const KeyboardView = ({keyboardOnPress, password, onSuccess, onFailure, animatedDeleteButton, animatedDeleteButtonOnPress}) => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "SİL", "0"];
  const renderItem = ({item, index}) => {
    let style;
    let onPressActive;
    if (item === "SİL") {
      onPressActive = animatedDeleteButtonOnPress;
      style = [styles.keyboardViewItem, {
        opacity: animatedDeleteButton
      }]
    } else if (item === "?") {
      onPressActive = false;
      style = [styles.keyboardViewItem]
    } else {
      onPressActive = false;
      style = [styles.keyboardViewItem]
    }
    return (
      <TouchableOpacity onPress={ () => keyboardOnPress(item, password, onSuccess, onFailure) }
                        disabled={ onPressActive }>
        <Animated.View style={ style }>
          <Text style={ styles.keyboardViewItemText }>{ item }</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  };
  return (
    <FlatList
      scrollEnabled={ false }
      horizontal={ false }
      vertical={ true }
      numColumns={ 3 }
      contentContainerStyle={ styles.keyboardView }
      renderItem={ renderItem }
      data={ data }
      keyExtractor={ (val, index) => "pinViewItem-" + index }
    />
  )
};


Array.prototype.equals = function (array) {
  return this.length === array.length &&
    this.every(function (this_i, i) { return this_i === array[i] })
};

const styles = StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection: 'row',
    alignSelf    : 'center',
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    margin         : 5,
    width          : 35,
    borderRadius   : 35 / 2,
    opacity        : 0.1,
    backgroundColor: '#FFFFFF',
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    width          : 35,
    margin         : 5,
    borderRadius   : 35 / 2,
    opacity        : 0.9,
    backgroundColor: '#FFFFFF',
  },

  // KeyboardView
  keyboardView        : {
    flexDirection : 'column',
    alignItems    : 'flex-start',
    marginTop: 15
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