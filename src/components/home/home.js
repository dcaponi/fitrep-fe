import React, { Component } from 'react';
import AppWrapper from '../../ui-components/app-wrapper/app-wrapper';
import CommentsBox from '../../ui-components/comments-box/comments-box';
import Dashboard from '../../ui-components/dashboard/dashboard';
import ControlPanel from '../../ui-components/control-panel/control-panel';



import { connect } from "react-redux";
import './home.css';

class H extends Component {
  state = {
    ratingLinks: [],
    ratings: []
  }

  componentDidMount(){
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    let ratingsReq = fetch(`${fitrepUrl}/ratings`, {credentials: 'include'})
    let ratingLinksReq = fetch(`${fitrepUrl}/rating_links`, {credentials: 'include'})
    Promise.all([ratingsReq, ratingLinksReq])
    .then((res) => {
      let resJson = res.map(r => r.json())
      return Promise.all(resJson)
    })
    .then((res) => {
      let newState = Object.assign({}, this.state);
      newState.ratings = res[0].ratings;
      newState.ratingLinks = res[1].rating_links;
      this.setState(newState)
    })
  }
  render(){
    if(this.props.isAuthenticated){
      console.log(this.state.ratingLinks[0])
      return (
        <AppWrapper>
          <div className="home">
            <Dashboard ratings={this.state.ratings}/>
            <ControlPanel ratingLinks={this.state.ratingLinks} />
            <CommentsBox ratings={this.state.ratings} />
          </div>
        </AppWrapper>
      );
    }
    return (
      <AppWrapper><div className="home">Log in to continue</div></AppWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    currentUser: state.currentUser
  }
};

const Home = connect(mapStateToProps)(H);
export default Home
