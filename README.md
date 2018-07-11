# React Native Pin View

Easy, convenient, quick-forming PinView component. It runs smoothly for both IOS and Android, and has only keyboard and input. Thats means you can use everywhere also there is no need to run ```react-native link```

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

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
|**`buttonTextColor`**|`string`| `#333` | Color of the texts on the number keyboard. |
|**`buttonBgColor`**|`string`| `#FFF` | Background of the buttons on the number keyboard |
|**`inputBgColor`**|`string`| `#333` | Input color before entering the pin  |
|**`inputBgOpacity`**|`number`| `0.1` | Input opacity before entering the pin |
|**`inputActiveBgColor`**|`string`| `#333` | The input color that is active when entering the pin. |
|**`deleteText`**|`string`| `DEL` | Appears when the user starts entering the pin.  |
|**`onSuccess`**|`func`| none | It works when the user enters the password correctly |
|**`onFailure`**|`func`| none | It works when the user enters the password incorrect |
|**`password`**|`array`| none | Only numbers are accepted, with a minimum of 3 and a maximum of 8. `ex. [1,3,5,7,9]` |

## Basic Usage

```
        <PinView
          onSuccess={ ()=>{alert("SUCCESS")} }
          onFailure={ ()=>{alert("FAILURE")} }
          password={ [1, 3, 5, 7, 9] }
        />
```

#### Documentation

[![Turkish (Türkçe)](https://img.shields.io/badge/TR-T%C3%BCrk%C3%A7e%20Dok%C3%BCmantasyon-red.svg)](/docs/tr/docs.md)

## v0.1.0 Features

- Updated

## Contributors (Thank you all)

- All contributions are accepted!

## Built With

* [React-Native](https://facebook.github.io/react-native/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details