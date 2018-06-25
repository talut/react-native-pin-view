import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import lodash from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password : [5, 1, 3, 5],
      userInput: []
    };
    //
    this.keyboardOnPress = this.keyboardOnPress.bind(this);
  }

  keyboardOnPress = (val) => {
    if (val === "SİL") {
      this.setState({
        userInput: this.state.userInput.slice(0, -1),
        password: this.state.password
      });
    } else {
      if (lodash.size(this.state.userInput) !== lodash.size(this.state.password)) {
        this.setState({
          userInput: this.state.userInput.concat(val),
          password: this.state.password
        });
      }
    }
  };

  render() {
    console.log(this.state.userInput);
    if (lodash.isEqual(this.state.password, this.state.userInput)) {
      console.log('EŞİT');
    } else {
      if (lodash.size(this.state.userInput) === 6) {
        console.log('ŞİFRE TAM GİRİLMEDİ');
      } else {
        console.log('EŞİT DEĞİL');
      }
    }
    return (
      <View style={ styles.container }>
        <View>
          <Text style={ styles.logo }>CÜZDAN</Text>
        </View>
        <View>
          <PasswordInputView data={ this.state.password } userInput={ this.state.userInput }/>
          <KeyboardView onPress={ this.keyboardOnPress }/>
        </View>
      </View>
    );
  }
}
const KeyboardView = (props) => {
  const data = [
    {
      onPress: () => props.onPress(1),
      title  : "1",
    },
    {
      onPress: () => props.onPress(2),
      title  : "2",
    },
    {
      onPress: () => props.onPress(3),
      title  : "3",
    },
    {
      onPress: () => props.onPress(4),
      title  : "4",
    },
    {
      onPress: () => props.onPress(5),
      title  : "5",
    },
    {
      onPress: () => props.onPress(6),
      title  : "6",
    },
    {
      onPress: () => props.onPress(7),
      title  : "7",
    },
    {
      onPress: () => props.onPress(8),
      title  : "8",
    },
    {
      onPress: () => props.onPress(9),
      title  : "9",
    },
    {
      onPress: () => props.onPress('SİL'),
      title  : "SİL",
    },
    {
      onPress: () => props.onPress(0),
      title  : "0",
    },
    {
      onPress: () => props.onPress('GİR'),
      title  : "GİR",
    }
  ];
  return (
    <FlatList
      style={ {
        paddingHorizontal: 20
      } }
      horizontal={ false }
      vertical={ true }
      numColumns={ 3 }
      contentContainerStyle={ styles.keyboardView }
      renderItem={ ({item}) => {
        return (
          <TouchableOpacity onPress={ item.onPress } style={ styles.keyboardViewItem }>
            <View>
              <Text style={ styles.keyboardViewItemText }>{ item.title }</Text>
            </View>
          </TouchableOpacity>
        )
      } }
      data={ data }
      keyExtractor={ (val, index) => "pinViewItem-" + index }
    />
  )
};

const PasswordInputView = (props) => {
  return (
    <FlatList
      contentContainerStyle={ styles.passwordInputView }
      data={ props.data }
      keyExtractor={ (val, index) => "passwordItem-" + index }
      renderItem={ ({item, index}) => {
        return (<View style={ styles.passwordInputViewItem }/>)
      } }
    />
  )
};

const styles = StyleSheet.create({
  container           : {
    flex           : 1,
    backgroundColor: '#fc0',
    justifyContent : 'center'
  },
  logo                : {
    textAlign    : 'center',
    fontSize     : 35,
    fontWeight   : '900',
    paddingBottom: 25,
    marginBottom : 25,
    color        : 'rgba(255,255,255,1)'
  },
  keyboardView        : {
    flexDirection : 'column',
    justifyContent: 'flex-start',
    alignItems    : 'center',
    marginVertical: 25
  },
  keyboardViewItem    : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 80,
    width           : 80,
    marginHorizontal: 20,
    marginVertical  : 10,
    borderRadius    : 80 / 2,
    backgroundColor : 'rgba(255,255,255,0.2)',
  },
  keyboardViewItemText: {
    fontSize  : 30,
    fontWeight: '900',
    color     : 'rgba(255,255,255,1)'
  },

  //passwordInputView
  passwordInputView          : {
    flexDirection    : 'row',
    alignItems       : 'flex-end',
    alignSelf        : 'center',
    paddingHorizontal: 40,
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    margin         : 5,
    width          : 35,
    borderRadius   : 35 / 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 35,
    width          : 35,
    margin         : 5,
    borderRadius   : 35 / 2,
    backgroundColor: 'rgba(255,255,255,1)',
  }
});
