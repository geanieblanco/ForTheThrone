import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './db/firebaseConfig';
import AppRouter from './Components/Router';
import './Styles/style.css';



class App extends Component {
  
  render() {

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const providers = {
      googleProvider: new firebase.auth.GoogleAuthProvider(),
    };
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user 
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    );


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)