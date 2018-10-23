# React Native Pin View

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input. Thats means you can use everywhere also there is no need to run ```react-native link```

<p align='center'><img src='https://taluttasgiran.com.tr/assets/demo-of-pinview.gif' alt='PinView 1'></p>

##### What's new in v2.0.0

With v2.0.1 user inputted pin will not verified by `react-native-pin-view`. PinView component will only return the inputted value. 

- returnType added (Return type of inputted value : `array` or `string`)
- onComplete added (This will return `inputtedVal` and `clear()` callback) (When user inputted the pin it will run. (Will return inputted value as returnType))
- pinLength added (User pin length or default pin length for all users.)
- clear() you can use this in onComplete callback. If you want to clear user input you should call this.

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

import PinView from 'react-native-pin-view'

...
        <PinView
            onComplete={(val, clear)=>{alert(val)}}
            pinLength={5}
        />
```

## Props

| Prop                     | Type      | Default | Description                                                                                           | Required |
| ------------------------ | --------- | ------- | ----------------------------------------------------------------------------------------------------- | -------- |
| **`buttonTextColor`**    | `string`  | `#333`  | Color of the texts on the number keyboard.                                                            | No       |
| **`buttonBgColor`**      | `string`  | `#FFF`  | Background of the buttons on the number keyboard                                                      | No       |
| **`inputBgColor`**       | `string`  | `#333`  | Input color before entering the pin                                                                   | No       |
| **`inputBgOpacity`**     | `number`  | `0.1`   | Input opacity before entering the pin                                                                 | No       |
| **`inputActiveBgColor`** | `string`  | `#333`  | The input color that is active when entering the pin.                                                 | No       |
| **`deleteText`**         | `string`  | `DEL`   | Appears when the user starts entering the pin.                                                        | No       |
| **`onComplete`**         | `func`    | none    | When the user completed input the pin, then inputted value will return. Also **`clear()`** is returning too. So if you want to remove user input after **onComplete** call **`clear()`** func in onComplete.| Yes      |
| **`returnType`**         | `string`  |`string` | _onComplete_ returning value type. It can be `string` or `array`| No      |
| **`pinLength`**     | `number`  | none         | (Min length: `3` , Max length: `8`) User pin length like `this.state.pin.length` or `5` If you're using hashed pin then set default length all pin or use pin length.  | Yes      |
| **`disabled`**           | `boolean` | false   | Optionally, you can set this props `true` or `false`. If `true`, the user can not enter the password. | No       |

#### Example App

```
import React, { Component } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view'

type Props = {};
export default class Master extends Component<Props> {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "896745"
    }
  }
  onComplete(inputtedPin, clear) {
  if(val!==this.state.pin){
  clear();
  }else{
  console.log("Pin is correct")
  }
  }
  render() {
    return (
      <View style={ {
        flex           : 1,
        backgroundColor: '#f1f1f1',
        justifyContent : 'center'
      } }>
        <PinView
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

- [@devcer](https://github.com/devcer)

## Built With

* [React-Native](https://facebook.github.io/react-native/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
