import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
  state = {
    loggedIn: null,
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrr3Le-7fZ8dNdTm2z5wv_EVwiRv8C4bY',
      authDomain: 'authentication-48b97.firebaseapp.com',
      databaseURL: 'https://authentication-48b97.firebaseio.com',
      projectId: 'authentication-48b97',
      storageBucket: 'authentication-48b97.appspot.com',
      messagingSenderId: '637616958659',
      appId: '1:637616958659:web:90de92caf8f64aa716c676',
      measurementId: 'G-74CHCD1E10',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
