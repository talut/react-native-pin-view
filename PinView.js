import React from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// datas

class PinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput                  : [],
      animatedInputIndex         : Object.assign([]),
      animatedLoginButton        : new Animated.Value(0),
      animatedDeleteButton       : new Animated.Value(0),
      animatedDeleteButtonOnPress: true,
      animatedLoginButtonOnPress : true,
    };
    this.onAnimation = this.onAnimation.bind(this);
    this.keyboardOnPress = this.keyboardOnPress.bind(this);
  }

  onAnimation(index) {
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
      animatedInputIndex         : this.state.animatedInputIndex.concat(index)
    });
  }

  keyboardOnPress = (val, password, onSuccess, onFailure, onAnimation) => {
    if (val === "SİL") {
      this.setState({
        userInput         : this.state.userInput.slice(0, -1),
        animatedInputIndex: this.state.animatedInputIndex.slice(0, -1)
      });
      if (this.state.userInput.length === 1){
        Animated.timing(
          // Animate value over time
          this.state.animatedDeleteButton, // The value to drive
          {
            toValue : 0, // Animate to final value of 1
            duration: 1
          }
        ).start(); // Start the animation
        this.setState({
          animatedDeleteButtonOnPress: true,
        })
      }
      Animated.timing(
        // Animate value over time
        this.state.animatedLoginButton, // The value to drive
        {
          toValue : 0, // Animate to final value of 1
          duration: 1
        }
      ).start(); // Start the animation
      this.setState({
        animatedLoginButtonOnPress: true,
      })
    } else if (val === "GİR") {
      if (this.state.userInput.equals(password)) {
        onSuccess()
      } else {
        onFailure()
      }
    } else {
      if (password.length !== this.state.userInput.length) {
        this.setState({
          userInput: this.state.userInput.concat(parseInt(val)),
        });
        onAnimation(this.state.userInput.indexOf(parseInt(val)));
        if (this.state.userInput.length + 1 === password.length) {
          Animated.timing(
            // Animate value over time
            this.state.animatedLoginButton, // The value to drive
            {
              toValue : 1, // Animate to final value of 1
              duration: 300
            }
          ).start(); // Start the animation
          this.setState({
            animatedLoginButtonOnPress: false,
          })
        }
      } else {

      }
    }
  };

  render() {
    const {password, onSuccess, onFailure} = this.props;
    return (
      <View style={ {
        flexDirection: 'column'
      } }>
        <View style={ styles.passwordInputView }>
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
        </View>
        <KeyboardView
          animatedDeleteButton={ this.state.animatedDeleteButton }
          animatedLoginButton={ this.state.animatedLoginButton }
          password={ password }
          onSuccess={ onSuccess }
          onFailure={ onFailure }
          animatedDeleteButtonOnPress={ this.state.animatedDeleteButtonOnPress }
          animatedLoginButtonOnPress={ this.state.animatedLoginButtonOnPress }
          keyboardOnPress={ this.keyboardOnPress }
          onAnimation={ this.onAnimation }/>
      </View>
    )
  }
}

const KeyboardView = ({keyboardOnPress, password, onSuccess, onFailure, onAnimation, animatedDeleteButton, animatedLoginButton, animatedLoginButtonOnPress, animatedDeleteButtonOnPress}) => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "SİL", "0", "GİR"];
  const renderItem = ({item, index}) => {
    let style;
    let onPressActive;
    if (item === "SİL") {
      onPressActive = animatedDeleteButtonOnPress;
      style = [styles.keyboardViewItemInactive, {
        opacity: animatedDeleteButton
      }]
    } else if (item === "GİR") {
      onPressActive = animatedLoginButtonOnPress;
      style = [styles.keyboardViewItemInactive, {
        opacity: animatedLoginButton
      }]
    } else {
      onPressActive = false;
      style = [styles.keyboardViewItem]
    }
    return (
      <TouchableOpacity onPress={ () => keyboardOnPress(item, password, onSuccess, onFailure, onAnimation) }
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
      style={ {
        paddingHorizontal: 0
      } }
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
  keyboardView            : {
    flexDirection : 'column',
    justifyContent: 'flex-start',
    alignItems    : 'center',
    marginVertical: 25
  },
  keyboardViewItem        : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
    backgroundColor : 'rgba(255,255,255,0.05)',
  },
  keyboardViewItemInactive: {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 20,
    marginVertical  : 5,
    borderRadius    : 75 / 2,
    backgroundColor : 'rgba(244,244,244,0.1)',
  },
  keyboardViewItemText    : {
    fontSize  : 22,
    fontWeight: '900',
    color     : 'rgba(255,255,255,0.5)'
  },
});

export default PinView