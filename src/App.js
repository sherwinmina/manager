import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBDq21TSGVrnj1wFgnvclEbf65ag2lblaA",
      authDomain: "manager-e9bc1.firebaseapp.com",
      databaseURL: "https://manager-e9bc1.firebaseio.com",
      storageBucket: "manager-e9bc1.appspot.com",
      messagingSenderId: "303896157595"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore()}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;