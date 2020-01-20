# React Native Pin View

## v3.0.0 Released

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input.

<p align='center'><img src='https://taluttasgiran.com.tr/assets/demo-of-pinview.gif' alt='PinView 1'></p>

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
        <PinView
            onComplete={val=>{console.log(val)}}
            pinLength={6}
        />
```

## Props

| Prop                          | Type              | Default                               | Description                                                                                           | Required  |
| ----------------------------- | ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- |
|onComplete                     |func               |-                                      |                                                                                                       |           |
|onButtonPress                  |func               |-                                      |                                                                                                       |           |
|onValueChange                  |func               |-                                      |                                                                                                       |           |
|pinLength                      |number             |-                                      |                                                                                                       |           |
|inputSize                      |number             |-                                      |                                                                                                       |           |
|activeOpacity                  |number             |-                                      |                                                                                                       |           |
|buttonSize                     |number             |-                                      |                                                                                                       |           |
|style                          |ViewStyle          |-                                      |                                                                                                       |           |
|inputAreaStyle                 |ViewStyle          |`{ marginVertical: 12 }`               |                                                                                                       |           |
|inputViewStyle                 |ViewStyle          |-                                      |                                                                                                       |           |
|inputViewEmptyStyle            |ViewStyle          |-                                      |                                                                                                       |           |
|buttonViewStyle                |ViewStyle          |-                                      |                                                                                                       |           |
|buttonAreaStyle                |ViewStyle          |`{ marginVertical: 12 }`               |                                                                                                       |           |
|inputViewFilledStyle           |ViewStyle          |-                                      |                                                                                                       |           |
|inputTextStyle                 |TextStyle          |-                                      |                                                                                                       |           |
|buttonTextStyle                |TextStyle          |`{ color: "#FFF", fontSize: 30 }`      |                                                                                                       |           |
|disabled                       |boolean            |-                                      |                                                                                                       |           |
|showInputText                  |boolean            |-                                      |                                                                                                       |           |
|accessible                     |boolean            |-                                      |                                                                                                       |           |
|buttonTextByKey                |object             |-                                      |                                                                                                       |           |
|customLeftButtonDisabled       |boolean            |-                                      |                                                                                                       |           |
|customLeftButton               |React.Component    |-                                      |                                                                                                       |           |
|customLeftAccessibilityLabel   |string             |-                                      |                                                                                                       |           |
|customLeftButtonViewStyle      |ViewStyle          |-                                      |                                                                                                       |           |
|customRightButtonDisabled      |boolean            |-                                      |                                                                                                       |           |
|customRightButton              |React.Component    |-                                      |                                                                                                       |           |
|customRightAccessibilityLabel  |string             |-                                      |                                                                                                       |           |
|customRightButtonViewStyle     |ViewStyle          |-                                      |                                                                                                       |           |

#### Example App

```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view';

type Props = {};
export default class Master extends Component<Props> {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "896745"
    };
  }
  onComplete(inputtedPin, clear) {
    if (val !== this.state.pin) {
      clear();
    } else {
      console.log("Pin is correct");
    }
  }
  onPress(inputtedPin, clear, pressed) {
    console.log("Pressed: "+ pressed);
    console.log("inputtedPin: "+ inputtedPin);
    // clear();
  }
  render() {
    return (
      <View style={{
        flex           : 1,
        backgroundColor: '#f1f1f1',
        justifyContent : 'center'
      }}>
        <PinView
        onPress={this.onPress}
        onComplete={this.onComplete}
        pinLength={this.state.pin.length}
        // pinLength={6} // You can also use like that.
        />
      </View>
    );
  }
}
```

## Contributors (Thank you all)

- [@jenskuhrjorgensen](https://github.com/jenskuhrjorgensen)
- [@devcer](https://github.com/devcer)
- [@mattvick](https://github.com/mattvick)
- [@TchernyavskyDaniil](https://github.com/TchernyavskyDaniil)

## Built With

* [React-Native](https://facebook.github.io/react-native/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
