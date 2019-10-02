import React, { Component } from 'react';
import withAuthenticatedUser from '../../HOC/with-authenticated-user';

import AppWrapper from '../../ui-components/app-wrapper/app-wrapper';
import CommentsBox from '../../ui-components/comments-box/comments-box';
import Dashboard from '../../ui-components/dashboard/dashboard';
import ControlPanel from '../../ui-components/control-panel/control-panel';

class Home extends Component {
  state = {
    surveyUuids: [],
    ratings: []
  }

  createLink = () => {
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    fetch(`${fitrepUrl}/surveys`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((res) => {
      let newState = Object.assign({}, this.state);
      newState.surveyUuids = [ res.surveys[0].uuid ];
      this.setState(newState)
    })
  }

  destroyLink = (uuid) => {
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    fetch(`${fitrepUrl}/surveys/${uuid}`, {
      credentials: 'include',
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then((res) => {
      let newState = Object.assign({}, this.state);
      newState.surveyUuids = [];
      this.setState(newState)
    })
  }

  componentDidMount(){
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    let ratingsReq = fetch(`${fitrepUrl}/ratings`, {credentials: 'include'})
    let surveysReq = fetch(`${fitrepUrl}/surveys`, {credentials: 'include'})
    Promise.all([ratingsReq, surveysReq])
    .then((res) => {
      let resJson = res.map(r => r.json())
      return Promise.all(resJson)
    })
    .then((res) => {
      let newState = Object.assign({}, this.state);
      if(res[0].ratings){
        newState.ratings = res[0].ratings;
        newState.surveyUuids = res[1].surveys.map(r => r.uuid);
        this.setState(newState)
      }
    })
  }

  render(){
    let linkString = process.env.REACT_APP_LOGIN_URL + "/login?redirect=" + process.env.REACT_APP_RATINGS_URL;
    if(this.props.isAuthenticated){
      return (
        <AppWrapper>
          <div className="home">
            <Dashboard ratings={this.state.ratings}/>
            <ControlPanel
              createLink={this.createLink}
              destroyLink={this.destroyLink}
              surveyUuids={this.state.surveyUuids}
            />
            <CommentsBox ratings={this.state.ratings} />
          </div>
        </AppWrapper>
      );
    }
    return (
      <AppWrapper>
        <div className="home">
          <a href={linkString}>Log in or Sign Up to Continue</a>
        </div>
      </AppWrapper>
    )
  }
}

Home = withAuthenticatedUser(Home);

export default Home
