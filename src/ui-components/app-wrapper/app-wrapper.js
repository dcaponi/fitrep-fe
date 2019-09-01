import React, { Component } from 'react';
import Header from '../header/header';
import LeftRail from '../left-rail/left-rail';

class AppWrapper extends Component {

  constructor(props){
    super(props);
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    let bouncerUrl = process.env.REACT_APP_BOUNCER_URL;
    fetch(`${bouncerUrl}/user`, {
      credentials: 'include'
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.user){
        this.props.setUser({
          isAuthenticated: true,
          currentUser: res.user
        })
      }
    })
  }
  render(){
    return(
      <div className="App">
        <Header/>
        <div className="app-body">
          <LeftRail/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppWrapper
