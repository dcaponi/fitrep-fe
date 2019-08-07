import React, { Component } from 'react';

import './rating.css';
class Rating extends Component {

  state = {
    userId: null,
    rating: "3",
    comment: ""
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    fetch('https://api.fitrep.developerdom.com/rating_link/'+ params.id, {})
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
    fetch('https://api.fitrep.developerdom.com/ratings', {
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
    let newState = this.state;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render(){
    return (
      <div className="rating">
        <h3 className="rating-header">Leave Your Feedback</h3>
        <form onSubmit={this.handleSubmit} className="rating-form">
          <p className="form-title">How am I doing?</p>
          <input type="radio" id="1" name="rating" value="1" onChange={this.handleChange}/>
          <label htmlFor="1">Not Good &nbsp;</label>
          <input type="radio" id="2" name="rating" value="2" onChange={this.handleChange}/>
          <label htmlFor="2">Could Improve &nbsp;</label>
          <input type="radio" id="3" name="rating" value="3" onChange={this.handleChange} defaultChecked/>
          <label htmlFor="3">Meh &nbsp;</label>
          <input type="radio" id="4" name="rating" value="4" onChange={this.handleChange}/>
          <label htmlFor="4">Good &nbsp;</label>
          <input type="radio" id="5" name="rating" value="5" onChange={this.handleChange}/>
          <label htmlFor="5">Amazing! &nbsp;</label>
          <div className="comment-section">
            <p className="comment-title">Would you like to leave a comment?</p>
            <textarea name="comment" value={this.state.comment} onChange={this.handleChange} rows="5" cols="100"/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Rating;
