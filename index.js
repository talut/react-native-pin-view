import React from "react"
import { Animated, View, ViewPropTypes, StyleSheet, Text } from "react-native"
import KeyboardView from "./libs/parts/KeyboardView"
import InputView from "./libs/parts/InputView"
import Styles from "./libs/parts/styles"
import PropTypes from "prop-types"

class PinView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animatedInputIndex: Object.assign([]),
      animatedDeleteButton: new Animated.Value(0),
      pinViewAnim: new Animated.Value(0),
      animatedDeleteButtonOnPress: true,
    }
    this.keyboardOnPress = this.keyboardOnPress.bind(this)
    this.setDeleteButton = this.setDeleteButton.bind(this)
    this.clear = this.clear.bind(this)
  }

  userInput = []
  setDeleteButton = status => {
    Animated.timing(
      // Animate value over time
      this.state.animatedDeleteButton, // The value to drive
      {
        toValue: status ? 1 : 0, // Animate to final value of 1
        duration: 100,
      },
    ).start() // Start the animation
    this.setState({
      animatedDeleteButtonOnPress: !status,
    })
  }

  clear() {
    this.userInput = []
    this.setState({
      animatedInputIndex: Object.assign([]),
      pinViewAnim: new Animated.Value(0),
    })
  }

  keyboardOnPress = (val, returnType, pinLength, onComplete, onPress) => {
    if (val === this.props.customButtonText) {
      this.props.onCustomButtonPress()
    } else if (val === this.props.deleteText) {
      this.userInput = this.userInput.slice(0, -1)
      this.setState({
        animatedInputIndex: this.state.animatedInputIndex.slice(0, -1),
      })
      if (this.userInput.length === 0) {
        this.setDeleteButton(false)
      }
    } else if (this.userInput.length < pinLength) {
      if (pinLength === this.userInput.length + 1) {
        this.userInput = this.userInput.concat(parseInt(val))
        this.setDeleteButton(true)
        this.setState(
          {
            animatedInputIndex: this.state.animatedInputIndex.concat(this.userInput.indexOf(parseInt(val))),
          },
          () => {
            setTimeout(() => {
              if (returnType === "string") {
                return onComplete(this.userInput.join(""), this.clear)
              } else if (returnType === "array") {
                return onComplete(this.userInput, this.clear)
              } else {
                console.log("Unkown return type!")
              }
            }, this.props.delayBeforeOnComplete)
          },
        )
      } else {
        this.userInput = this.userInput.concat(parseInt(val))
        this.setDeleteButton(true)
        this.setState({
          animatedInputIndex: this.state.animatedInputIndex.concat(this.userInput.indexOf(parseInt(val))),
        })
      }
    }
    if (onPress && typeof onPress === "function") {
      onPress(this.userInput, this.clear, val)
    }
  }

  render() {
    const {
      pinLength,
      showInputs,
      inputTextStyle,
      keyboardViewStyle,
      keyboardViewTextStyle,
      inputViewStyle,
      buttonTextColor,
      returnType,
      buttonBgColor,
      inputBgColor,
      onComplete,
      disabled,
      inputActiveBgColor,
      inputBgOpacity,
      deleteText,
      customButtonText,
      onCustomButtonPress,
      keyboardContainerStyle,
      onPress,
      buttonDeletePosition,
      buttonDeleteStyle,
      buttonActiveOpacity,
    } = this.props
    return (
      <View pointerEvents={disabled ? "none" : undefined}>
        <InputView
          inputViewStyle={inputViewStyle}
          showInputs={showInputs}
          inputTextStyle={inputTextStyle}
          bgOpacity={inputBgOpacity}
          inputtedValues={showInputs ? this.userInput : undefined}
          pinLength={pinLength}
          activeBgColor={inputActiveBgColor}
          animatedInputIndex={this.state.animatedInputIndex}
          pinViewAnim={this.state.pinViewAnim}
          bgColor={inputBgColor}
          styles={[Styles.passwordInputView, Styles.passwordInputViewItem, Styles.passwordInputViewItemActive]}
        />
        <View style={[Styles.keyboardView, keyboardContainerStyle]}>
          <KeyboardView
            keyboardViewStyle={keyboardViewStyle}
            keyboardViewTextStyle={keyboardViewTextStyle}
            styles={[Styles.keyboardViewItem, Styles.keyboardViewItemText]}
            bgColor={buttonBgColor}
            textColor={buttonTextColor}
            animatedDeleteButton={this.state.animatedDeleteButton}
            pinLength={pinLength}
            deleteText={deleteText}
            customButtonText={customButtonText}
            onCustomButtonPress={onCustomButtonPress}
            onComplete={onComplete}
            animatedDeleteButtonOnPress={this.state.animatedDeleteButtonOnPress}
            keyboardOnPress={this.keyboardOnPress}
            returnType={returnType}
            onPress={onPress}
            buttonDeletePosition={buttonDeletePosition}
            buttonDeleteStyle={buttonDeleteStyle}
            buttonActiveOpacity={buttonActiveOpacity}
          />
        </View>
      </View>
    )
  }
}

PinView.defaultProps = {
  deleteText: "DEL",
  buttonBgColor: "#FFF",
  buttonTextColor: "#333",
  inputBgColor: "#333",
  inputActiveBgColor: "#333",
  returnType: "string",
  inputBgOpacity: 0.1,
  disabled: false,
  clear: false,
  delayBeforeOnComplete: 175,
  inputTextStyle: undefined,
  showInputs: false,
  inputViewStyle: StyleSheet.create({}),
  keyboardViewStyle: StyleSheet.create({}),
  keyboardContainerStyle: StyleSheet.create({}),
  onPress: undefined,
  buttonDeletePosition: "left",
  buttonDeleteStyle: StyleSheet.create({}),
  buttonActiveOpacity: 0.9,
}
PinView.propTypes = {
  disabled: PropTypes.bool,
  deleteText: PropTypes.any,
  customButtonText: PropTypes.any,
  onCustomButtonPress: PropTypes.func,
  returnType: PropTypes.string,
  buttonBgColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  inputBgColor: PropTypes.string,
  inputActiveBgColor: PropTypes.string,
  inputBgOpacity: PropTypes.number,
  onComplete: PropTypes.func.isRequired,
  pinLength: PropTypes.number.isRequired,
  delayBeforeOnComplete: PropTypes.number,
  clear: PropTypes.bool,
  inputTextStyle: Text.propTypes.style,
  showInputs: PropTypes.bool,
  inputViewStyle: ViewPropTypes.style,
  keyboardViewStyle: ViewPropTypes.style,
  keyboardContainerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
  buttonDeletePosition: PropTypes.string,
  buttonDeleteStyle: ViewPropTypes.style,
  buttonActiveOpacity: PropTypes.number,
}

export default PinView
