# React Native Pin View

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input.

## v3.* Released with more powerful features

##### BEWARE! This version has a lot of breaking changes.

<p align='center'>
<img src='./pin-view.gif' alt='PinView 1'>
</p>

You can get codes of this preview from [here](#example)


## Getting Started

**via Yarn**

```
yarn add react-native-pin-view
```

**via NPM**

```
npm install --save react-native-pin-view
```

## Basic Usage

```
import PinView from 'react-native-pin-view';

...
        <PinView pinLength={6} />
```

## Props

| Prop                          | Type              | Default                                                                                                |  Required  |
| ----------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
|pinLength                      |number             |-                                                                                                       | **Yes**    |
|onButtonPress                  |func               |-                                                                                                       | No         |
|onValueChange                  |func               |-                                                                                                       | No         |
|inputSize                      |number             |-                                                                                                       | No         |
|activeOpacity                  |number             |`0.9`                                                                                                   | No         |
|buttonSize                     |number             |`60`                                                                                                    | No         |
|style                          |ViewStyle          |-                                                                                                       | No         |
|inputAreaStyle                 |ViewStyle          |`{ marginVertical: 12 }`                                                                                | No         |
|inputViewStyle                 |ViewStyle          |-                                                                                                       | No         |
|inputViewEmptyStyle            |ViewStyle          |-                                                                                                       | No         |
|buttonViewStyle                |ViewStyle          |-                                                                                                       | No         |
|buttonAreaStyle                |ViewStyle          |`{ marginVertical: 12 }`                                                                                | No         |
|inputViewFilledStyle           |ViewStyle          |-                                                                                                       | No         |
|inputTextStyle                 |TextStyle          |-                                                                                                       | No         |
|buttonTextStyle                |TextStyle          |`{ color: "#FFF", fontSize: 30 }`                                                                       | No         |
|disabled                       |boolean            |-                                                                                                       | No         |
|showInputText                  |boolean            |`false`                                                                                                 | No         |
|accessible                     |boolean            |`false`                                                                                                 | No         |
|buttonTextByKey                |object             |`{one: "1",two: "2",three: "3",four: "4",five: "5",six: "6",seven: "7",eight: "8",nine: "9",zero: "0",}`| No         |
|customLeftButtonDisabled       |boolean            |`false`                                                                                                 | No         |
|customLeftButton               |React.Component    |-                                                                                                       | No         |
|customLeftAccessibilityLabel   |string             |`left`                                                                                                  | No         |
|customLeftButtonViewStyle      |ViewStyle          |-                                                                                                       | No         |
|customRightButtonDisabled      |boolean            |-                                                                                                       | No         |
|customRightButton              |React.Component    |-                                                                                                       | No         |
|customRightAccessibilityLabel  |string             |`right`                                                                                                 | No         |
|customRightButtonViewStyle     |ViewStyle          |-                                                                                                       | No         |

## Ref Actions
`const pinView = useRef(null)`

| Prop                          | Description                                          |
| ----------------------------- | -----------------------------------------------------|
|pinView.current.clearAll()     |This method completely clears the entered code.       |
|pinView.current.clear()        |This method only delete last number of entered code.  |

#### Example

```javascript
import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, SafeAreaView, StatusBar, Text } from "react-native"
import ReactNativePinView from "react-native-pin-view"
const App = () => {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])
  return (
    <>
      <StatusBar barStyle="light-content" />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              paddingTop: 24,
              paddingBottom: 48,
              color: "rgba(255,255,255,0.7)",
              fontSize: 48,
            }}>
            LUNA/CITY
          </Text>
          <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={8}
            buttonSize={60}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            inputViewFilledStyle={{
              backgroundColor: "#FFF",
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            buttonTextStyle={{
              color: "#FFF",
            }}
            onButtonPress={key => {
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                alert("Entered Pin: " + enteredPin)
              }
              if (key === "three") {
                alert("You can't use 3")
              }
            }}
            customLeftButton={showRemoveButton ? <Icon name={"ios-backspace"} size={36} color={"#FFF"} /> : undefined}
            customRightButton={showCompletedButton ? <Icon name={"ios-unlock"} size={36} color={"#FFF"} /> : undefined}
          />
        </SafeAreaView>
    </>
  )
}
export default App
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
