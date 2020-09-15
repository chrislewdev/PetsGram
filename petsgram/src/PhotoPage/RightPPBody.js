import React, { Component, useCallback, useEffect, useState } from "react";
import PPComment from "./PPComment";
import PPFollowing from "./PPFollowing";
import "./RightPPBody.css";
import s1 from "../Images/s1.png";

function RightPPBody(props) {
  const [commentsArray, setCommentsArray] = useState(props.dbCommentsArray);

  const [input, setInput] = useState("");

  const handleChangePost = (e) => setInput(e.target.value);

  const handleClickPost = () => {
    if (input != "") {
      postComment(input);

      setInput("");
    }
  };

  function postComment(comment) {
    const currentCommentsArray = commentsArray;

    const newComment = {
      displayPhoto: s1,
      username: "catto",
      comment: comment,
    };

    currentCommentsArray.push(newComment);

    setCommentsArray(currentCommentsArray);
  }

  const commentsRender = commentsArray.map((c) => (
    <PPComment
      ppCommentDP={c.displayPhoto}
      ppCommentUsername={c.username}
      ppComment={c.comment}
    />
  ));

  return (
    <div className="rightppbody-container">
      <div className="pp-user-details-container">
        <img src={props.ppUserDP} className="pp-user-dp" />
        <div className="pp-username">{props.ppUsername}</div>
        <div className="pp-following-container">
          <PPFollowing />
        </div>
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
