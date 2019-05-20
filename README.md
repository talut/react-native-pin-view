# React Native Pin View

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input. Thats means you can use everywhere also there is no need to run ```react-native link```

<p align='center'><img src='https://taluttasgiran.com.tr/assets/demo-of-pinview.gif' alt='PinView 1'></p>

##### What's new at v2.2.2
- KeyboardViewTextStyle added. [https://github.com/talut/react-native-pin-view/pull/21](https://github.com/talut/react-native-pin-view/pull/21)

###### What's new at v2.2.1
- With this update you can change input style and keyboard number style.
- Typescript definitions added.

###### What's new at v2.1.11

- Show/Hide support added for inputted pin. showInputs and inputTextStyle props added. Just set  `showInputs={true}` at PinView component. [https://github.com/talut/react-native-pin-view/issues/13](https://github.com/talut/react-native-pin-view/issues/13)
- pinLength issue solved. [https://github.com/talut/react-native-pin-view/issues/18](https://github.com/talut/react-native-pin-view/issues/18)

###### TODO's

- Support for more styleable component.. [https://github.com/talut/react-native-pin-view/issues/6](https://github.com/talut/react-native-pin-view/issues/6)
- Permission to you for own KeyboardView number pad. Like Arabic or Latin. I think this will solve RTL issue.

###### What was new at v2.1.0

- At v2.1.0, RTL support disabled. But I will review and add RTL support at future release. Right now RTL component same as LTR. [https://github.com/talut/react-native-pin-view/issues/17](https://github.com/talut/react-native-pin-view/issues/17)
- delayBeforeOnComplete props added. Default is 175ms. [https://github.com/talut/react-native-pin-view/issues/14](https://github.com/talut/react-native-pin-view/issues/14)



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
| **`delayBeforeOnComplete`**           | `number` | 175   | Optionally, you can set this props for delaying before onComplete event. | No       |
| **`showInputs`**           | `boolean` | `false`   | If you want to show inputted pin use this props. | No       |
| **`inputTextStyle`**           | `object` | `{color:'#FFF',fontWeight:'bold'}`   | This props for styling inputted pin text. | No       |
| **`inputViewStyle`**           | `object` | `{borderRadius:6}`   | This props for styling input view item. | No       |
| **`keyboardViewStyle`**           | `object` | `{borderRadius:6}`   | This props for styling keyboard view item. | No       |
| **`keyboardViewTextStyle`**           | `object` | `{fontWeight:'normal'}`   | This props for styling keyboard view text. | No       |

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
