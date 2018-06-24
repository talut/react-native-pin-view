import React, {Component} from 'react';
import {
  StyleSheet,
  Text, TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

let userInput = [];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "123456",
      userInput: null
    };
    //
    StatusBar.setTranslucent(true);
    this.keyboardOnPress = this.keyboardOnPress.bind(this);
  }

  keyboardOnPress = (val) => {
    if (userInput.length === 6) {

    } else {
      this.setState({
        userInput: userInput.concat(userInput, val)
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>CÜZDAN</Text>
        </View>
        <View>
          <PasswordInputView/>
          <KeyboardView onPress={this.keyboardOnPress}/>
        </View>
      </View>
    );
  }
}

const KeyboardView = (props) => {
  return (
    <View style={styles.keyboardView}>
      <TouchableOpacity onPress={() => props.onPress(1)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(2)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(3)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(4)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(5)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(6)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>6</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(7)} style={styles.keyboardViewItem}>
        <View><Text style={styles.keyboardViewItemText}>7</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(8)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>8</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(9)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>9</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress('SİL')} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>SİL</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress(0)} style={styles.keyboardViewItem}>
        <View>
          <Text style={styles.keyboardViewItemText}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.keyboardViewItem, {backgroundColor: 'transparent'}]}/>
    </View>
  )
};

const PasswordInputView = () => {
  return (
    <View style={styles.passwordInputView}>
      <View style={styles.passwordInputViewItem}/>
      <View style={styles.passwordInputViewItem}/>
      <View style={styles.passwordInputViewItem}/>
      <View style={styles.passwordInputViewItem}/>
      <View style={styles.passwordInputViewItem}/>
      <View style={styles.passwordInputViewItem}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc0',
  },
  logo: {
    fontSize: 35,
    fontWeight: '900',
    paddingBottom: 25,
    color: 'rgba(255,255,255,1)'
  },
  keyboardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  keyboardViewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 80 / 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  keyboardViewItemText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'rgba(255,255,255,1)'
  },

  //passwordInputView
  passwordInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
    paddingHorizontal: 40,
  },
  passwordInputViewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    margin: 5,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  passwordInputViewItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    margin: 5,
    borderRadius: 35 / 2,
    backgroundColor: 'rgba(255,255,255,1)',
  }
});
