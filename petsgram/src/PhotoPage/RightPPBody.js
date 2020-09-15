import React, { Component, useCallback, useEffect, useState } from "react";
import PPComment from "./PPComment";
import "./RightPPBody.css";

function RightPPBody(props) {
  const commentsArray = props.commentsArray;

  const commentsRender = commentsArray.map((c) => (
    <PPComment
      ppCommentDP={c.displayPhoto}
      ppCommentUsername={c.username}
      ppComment={c.comment}
    />
  ));

  const [input, setInput] = useState("");

  const handleChangePost = (e) => setInput(e.target.value);

  const handleClickPost = () => {
    props.postComment(input);

    setInput("");
  };

  return (
    <div className="rightppbody-container">
      <div className="pp-user-details-container">
        <img src={props.ppUserDP} className="pp-user-dp" />
        <div className="pp-username">{props.ppUsername}</div>
        <div className="pp-following">Following</div>
      </div>
      <div className="pp-photo-details-container">
        <div className="pp-details">{props.ppDetails}</div>
      </div>
      <div className="pp-comments-container">{commentsRender}</div>
      <div className="pp-post-container">
        <input
          type="text"
          placeholder="Comment..."
          value={input}
          className="pp-post-box"
          onChange={handleChangePost}
        ></input>
        <div className="pp-post-submit" onClick={handleClickPost}>
          Post
        </div>
      </div>
    </div>
  );
}

export default RightPPBody;
