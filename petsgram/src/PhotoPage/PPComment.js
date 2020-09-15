import React, { Component } from "react";
import "./PPComment.css";

function PPComment(props) {
  return (
    <div className="pp-comment-container">
      <img src={props.ppCommentDP} className="pp-comment-dp" />
      <div className="pp-comment-username">{props.ppCommentUsername}</div>
      <div className="pp-comment">{props.ppComment}</div>
    </div>
  );
}

export default PPComment;
