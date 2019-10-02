import React, { Component } from "react";
import { IoMdCopy, IoMdCreate, IoMdTrash } from "react-icons/io"
import ReactTooltip from 'react-tooltip'

class ControlPanel extends Component {

  copyLink() {
    var copyText = document.querySelector("#surveyUuid");
    copyText.select();
    document.execCommand("copy");
  }

  render(){
    let linkText
    let surveyUuid
    if( this.props.surveyUuids.length > 0 ){
      linkText = process.env.REACT_APP_RATINGS_URL + "/rating/" + this.props.surveyUuids[0]
      surveyUuid = (
        <span>
          <input className="rating-link-field" id="surveyUuid" value={linkText} readOnly/> &emsp;
          <IoMdCopy data-tip data-for='copy' className="link-icon" onClick={this.copyLink}/>
          <ReactTooltip id='copy'><span>Copy Rating Link</span></ReactTooltip>
          <IoMdTrash data-tip data-for='recall' className="link-icon" onClick={()=>this.props.destroyLink(this.props.surveyUuids[0])}/>
          <ReactTooltip id='recall'><span>Recall Rating Link - Stop accepting ratings with this link.</span></ReactTooltip>
        </span>
      )
    }
    else{
      surveyUuid = (
        <span>
          <input className="rating-link-field" id="surveyUuid" value={"Click the Create Icon on the Right"} readOnly/>
          <IoMdCreate data-tip data-for='create' className="link-icon" onClick={this.props.createLink}/>
          <ReactTooltip id='create'><span>Create A New Rating Link</span></ReactTooltip>
        </span>
      )
    }
    return (
      <div className="control-panel">
        <h2>Rating Link</h2>
        <div className="controls">
          <strong>How to use</strong> &mdash; Anyone with this link can give you feedback. Embed this in an email, share on social media, and whatever you do share wisely! <br/>
          {surveyUuid}
        </div>
      </div>
    )
  }
}

export default ControlPanel
