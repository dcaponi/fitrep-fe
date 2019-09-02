import React from "react";

import "./comments-box.css"

const CommentsBox = (props) => {
  let comments = props.ratings.map((rating) => {
    let date = new Date(rating.created_at);
    let dateString = date.toLocaleDateString();
    let commentLine;
    if(rating.comment){
      commentLine = `Comment: ${rating.comment}`
    }
    return (
      <div key={rating.id.toString()}>
        <p className="comment-line">
          <em className="comment-author">{rating.rater_ip} on {dateString}</em> <br/>
          Given Rating: {rating.rating}<br/>
          {commentLine}
        </p>
      </div>
    )
  })
  return (
    <div>
      <h2>Comments</h2>
      <div className="comments-box">
        {comments}
      </div>
    </div>
  )

}

export default CommentsBox;
