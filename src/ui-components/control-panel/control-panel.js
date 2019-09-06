import React, { Component } from "react";
import { IoMdCopy, IoMdCreate, IoMdTrash } from "react-icons/io"
import ReactTooltip from 'react-tooltip'

import "./control-panel.scss"

class ControlPanel extends Component {

  copyLink() {
    var copyText = document.querySelector("#ratingLinkUuid");
    copyText.select();
    document.execCommand("copy");
  }

  render(){
    let linkText
    let ratingLinkUuid
    if( this.props.ratingLinkUuids.length > 0 ){
      linkText = process.env.REACT_APP_RATINGS_URL + "/rating/" + this.props.ratingLinkUuids[0]
      ratingLinkUuid = (
        <span>
          <input className="rating-link-field" id="ratingLinkUuid" value={linkText} readOnly/> &emsp;
          <IoMdCopy data-tip data-for='copy' className="link-icon" onClick={this.copyLink}/>
          <ReactTooltip id='copy'><span>Copy Rating Link</span></ReactTooltip>
          <IoMdTrash data-tip data-for='recall' className="link-icon" onClick={()=>this.props.destroyLink(this.props.ratingLinkUuids[0])}/>
          <ReactTooltip id='recall'><span>Recall Rating Link - Nobody can continue to use this link to submit ratings and you must generate a new link!</span></ReactTooltip>
        </span>
      )
    }
    else{
      ratingLinkUuid = (
        <span>
          <input className="rating-link-field" id="ratingLinkUuid" value={"No Link Yet!"} readOnly/>
          <IoMdCreate data-tip data-for='create' className="link-icon" onClick={this.props.createLink}/>
          <ReactTooltip id='create'><span>Create A New Rating Link</span></ReactTooltip>
        </span>
      )
    }
    return (
      <div className="control-panel">
        <h2>Control Panel</h2>
        <div className="controls">
          <strong>My Rating Link</strong> &mdash; Anyone with this link can give you feedback.<br/><br/>
          <strong>How to use</strong> &mdash; Embed this in an email, share on social media, and whatever you do share wisely! <br/>
          {ratingLinkUuid}
        </div>
      </div>
    )
  }
}

export default ControlPanel
