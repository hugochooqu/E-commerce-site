
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils'

import { Switch, Route } from 'react-router-dom';
import React from 'react';



class App extends React.component{
  constructor() {
    super();

    this.state = {
    currentUser : null  
  }


  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div>
    <Header />
      <Switch>
        <Route exact  path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} /> 
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
        
    </div>
  );
  }
}
  


export default App;
