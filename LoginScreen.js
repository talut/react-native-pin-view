import React from 'react';
import PinView from "./PinView";
import { View } from "react-native";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess = () => {
    alert("Password Correct!")
  };
  onFailure = () => {
    alert("Password Incorrect!")
  };

  render() {
    return (
      <View style={ {
        flex           : 1,
        backgroundColor: '#6548b7',
        justifyContent : 'center'
      } }>
        <PinView
          onSuccess={ this.onSuccess }
          onFailure={ this.onFailure }
          password={ [5, 1, 3, 5, 9, 0] }
        />
      </View>
    )
  }
}

export default LoginScreen