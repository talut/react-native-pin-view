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

| Prop                          | Type              | Default                                                                                                |  Required  |
| ----------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
|onComplete                     |func               |-                                                                                                       | **Yes**    |
|onButtonPress                  |func               |-                                                                                                       | No         |
|onValueChange                  |func               |-                                                                                                       | No         |
|pinLength                      |number             |-                                                                                                       | **Yes**    |
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
