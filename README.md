# React Native Pin View

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input. Thats means you can use everywhere also there is no need to run ```react-native link```

<p align='center'><img src='https://taluttasgiran.com.tr/assets/demo-of-pinview.gif' alt='PinView 1'></p>


##### Turkish Documentation

[![Turkish (Türkçe)](https://taluttasgiran.com.tr/assets/TR.svg)](/docs/tr/docs.md)

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
    password={ [1, 3, 5, 7, 9] }
    onSuccess={ ()=>{alert("SUCCESS")} }
    onFailure={ ()=>{alert("FAILURE")} }
    />
```

## Props

| Prop | Type | Default | Description | Required |
|---|---|---|---|---|
|**`buttonTextColor`**|`string`| `#333` | Color of the texts on the number keyboard. | No |
|**`buttonBgColor`**|`string`| `#FFF` | Background of the buttons on the number keyboard | No |
|**`inputBgColor`**|`string`| `#333` | Input color before entering the pin  | No |
|**`inputBgOpacity`**|`number`| `0.1` | Input opacity before entering the pin | No |
|**`inputActiveBgColor`**|`string`| `#333` | The input color that is active when entering the pin. | No |
|**`deleteText`**|`string`| `DEL` | Appears when the user starts entering the pin.  | No |
|**`onSuccess`**|`func`| none | It works when the user enters the password correctly| Yes |
|**`onFailure`**|`func`| none | It works when the user enters the password incorrect | Yes |
|**`password`**|`array`| none | Only numbers are accepted, with a minimum of 3 and a maximum of 8. `ex. [1,3,5,7,9]` | Yes |
|**`disabled`**|`boolean`| false | Optionally, you can set this props `true` or `false`. If `true`, the user can not enter the password. | No |


#### Example App

```
import React, { Component } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view'

type Props = {};
export default class Master extends Component<Props> {
  constructor(props) {
    super(props);
    this.onFailure = this.onFailure.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }
  onFailure() {
    alert('FAILURE')
  }
  onSuccess() {
    alert('SUCCESS')
  }
  render() {
    return (
      <View style={ {
        flex           : 1,
        backgroundColor: '#f1f1f1',
        justifyContent : 'center'
      } }>
        <PinView
          onSuccess={ this.onSuccess }
          onFailure={ this.onFailure }
          password={ [1, 3, 5, 7, 9] }
        />
      </View>
    );
  }
}
```

## Contributors (Thank you all)

- All contributions are accepted!

## Built With

* [React-Native](https://facebook.github.io/react-native/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details