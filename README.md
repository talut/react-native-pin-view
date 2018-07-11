# React Native Simple Card View

Easiest way to adding a card view on your screen.

- *Hey, v0.3.0 is now released. You can use new component : CardView [See v0.3.0 Features](#v030-features)*

<p align="center">
<a href="https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png">
<img src="https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png" alt="CardViewWithImage Example" />
</a>
<img src="https://s9.postimg.org/748niqban/card_View_With_Icon.png" alt="CardViewWithImage" />
</p>

<p align="center"><a href="https://www.npmjs.com/package/react-native-simple-card-view" target="_blank"><img src="https://nodei.co/npm/react-native-simple-card-view.png?downloads=true&downloadRank=true&stars=true" alt="package info" /></a></p>

[![GitHub stars](https://img.shields.io/github/stars/talut/react-native-simple-card-view.svg?style=social&label=Stars&style=flat-square)](https://github.com/talut/react-native-simple-card-view)

## Getting Started

**via Yarn**

```
yarn add react-native-simple-card-view
```

**via NPM**

```
npm install react-native-simple-card-view
```

**React-Native Link**

```
react-native link
```

#### Components

- [x] CardViewWithIcon ([See documentation of usage](/docs/en/cardviewwithicon.md))
- [x] CardViewWithImage ([See documentation of usage](/docs/en/cardviewwithimage.md))
- [x] CardView (Place your component to inside of CardView)
- [ ] CardViewWithAnimation or Adding animation support to CardViewWithIcon, CardViewWithImage, ArticleCardView

## Styling card view

You can create an object, who has the card view styles.
Then you can give that object to style props. Card view style object can have the following attributes

| Prop | Type | Default | Description |
|---|---|---|---|---|
|**`buttonTextColor`**|`string`| `#333` | Color of the texts on the number keyboard. |
|**`buttonBgColor`**|`string`| `#FFF` | Background of the buttons on the number keyboard |
|**`inputBgColor`**|`string`| `#333` | Input color before entering the pin  |
|**`inputBgOpacity`**|`number`| `0.1` | Input opacity before entering the pin |
|**`inputActiveBgColor`**|`string`| `#333` | The input color that is active when entering the pin. |
|**`deleteText`**|`string`| `DEL` | Appears when the user starts entering the pin.  |
|**`onSuccess`**|`func`| none | It works when the user enters the password correctly |
|**`onFailure`**|`func`| none | It works when the user enters the password incorrect |
|**`password`**|`array`| none | **min: 3**  **max: 8** number allowed |

## Basic Usage

```
        <PinView
          onSuccess={ this.onSuccess }
          onFailure={ this.onFailure }
          password={ [5, 1, 3] }
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