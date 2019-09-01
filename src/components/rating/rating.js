import React, { Component } from 'react';
import Slider from "../../ui-components/slider/slider";
import './rating.css';
class Rating extends Component {

  state = {
    userId: null,
    rating: "5.5",
    comment: ""
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    fetch(`${fitrepUrl}/rating_link/`+ params.id, {})
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if(res.length > 0){
          this.setState({userId: res[0]['user_id']})
        }
        else{
          console.log("The rating link may have expired")
        }
      })
      .catch((res) => {
        console.log("The requested rating link was not found")
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let fitrepUrl = process.env.REACT_APP_FITREP_URL;
    fetch(`${fitrepUrl}/ratings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: {
          user_id: this.state.userId,
          rating: this.state.rating,
          comment: this.state.comment
        }
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.props.history.push('/rating')
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleLabelClick = (labelRating) => {
    let newState = Object.assign({}, this.state);
    newState["rating"] = labelRating;
    this.setState(newState);
  }

  render(){
    if(this.state.userId){
      return (
        <div className="rating">
          <h3 className="rating-header">Leave Your Feedback</h3>
          <form onSubmit={this.handleSubmit} className="rating-form">
            <p className="form-title">How am I doing?</p>
            <Slider
              minValue="1"
              midValue="5.5"
              maxValue="10"
              value={this.state.rating}
              labelClicks={this.handleLabelClick}
              slide={this.handleChange}
            />
            <div className="comment-section">
              <p className="comment-title">Would you like to leave a comment?</p>
              <textarea name="comment" value={this.state.comment} onChange={this.handleChange} rows="5" cols="100"/>
            </div>

            <input className="submit-button" type="submit"/>
            <p><br/>Your feedback will remain anonymous.<br/></p>
          </form>
        </div>
      );
    }
    else{
      return (
        <div className="rating">
          <h3 className="rating-header">Leave Your Feedback</h3>
          <p className="removed-notice">Oops! This link seems to have expired or was taken down by the requester</p>
        </div>
      )
    }
  }
}

export default Rating;
