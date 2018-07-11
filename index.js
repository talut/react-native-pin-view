import React from 'react';
import { Animated, Easing, View } from "react-native";

import KeyboardView from './libs/parts/KeyboardView'
import InputView from './libs/parts/InputView'
import Styles from './libs/parts/styles'
import PropTypes from 'prop-types'

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
    if (val === this.props.deleteText) {
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
        this.setDeleteButton(true);
        this.setState({
          animatedInputIndex: this.state.animatedInputIndex.concat(this.userInput.indexOf(parseInt(val)))
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
    const {password, buttonTextColor, buttonBgColor, inputBgColor, onSuccess, onFailure, disabled, inputActiveBgColor, inputBgOpacity, deleteText} = this.props;
    return (
      <View pointerEvents={ disabled ? "none" : undefined }>
        <InputView
          bgOpacity={ inputBgOpacity }
          password={ password }
          activeBgColor={ inputActiveBgColor }
          animatedInputIndex={ this.state.animatedInputIndex }
          pinViewAnim={ this.state.pinViewAnim }
          bgColor={ inputBgColor }
          styles={ [Styles.passwordInputView, Styles.passwordInputViewItem, Styles.passwordInputViewItemActive] }
        />
        <View style={ Styles.keyboardView }>
          <KeyboardView
            styles={ [Styles.keyboardViewItem, Styles.keyboardViewItemText] }
            bgColor={ buttonBgColor }
            textColor={ buttonTextColor }
            animatedDeleteButton={ this.state.animatedDeleteButton }
            password={ password }
            deleteText={ deleteText }
            onSuccess={ onSuccess }
            onFailure={ onFailure }
            animatedDeleteButtonOnPress={ this.state.animatedDeleteButtonOnPress }
            keyboardOnPress={ this.keyboardOnPress }/>
        </View>
      </View>
    )
  }
}

PinView.defaultProps = {
  deleteText        : "DEL",
  buttonBgColor     : '#FFF',
  buttonTextColor   : '#333',
  inputBgColor      : '#333',
  inputActiveBgColor: '#333',
  inputBgOpacity    : 0.1,
  disabled          : false
};
PinView.propTypes = {
  disabled          : PropTypes.bool,
  deleteText        : PropTypes.string,
  buttonBgColor     : PropTypes.string,
  buttonTextColor   : PropTypes.string,
  inputBgColor      : PropTypes.string,
  inputActiveBgColor: PropTypes.string,
  inputBgOpacity    : PropTypes.number,
  onSuccess         : PropTypes.func.isRequired,
  onFailure         : PropTypes.func.isRequired,
  password          : PropTypes.array.isRequired
};

Array.prototype.equals = function (array) {
  return this.length === array.length &&
    this.every(function (this_i, i) { return this_i === array[i] })
};

export default PinView