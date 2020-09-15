import React, { useState, Component } from "react";
import "./LeftPPBody.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";

function LeftPPBody(props) {
  const [isLiked, setLiked] = useState(false);

  function handleClickLike() {
    setLiked(!isLiked);
  }

  return (
    <div className="leftppbody-container">
      <div className="pp-image-container">
        <img src={props.ppImage} className="pp-image" />
      </div>
      <div className="pp-icons-container">
        {isLiked ? (
          <AiFillHeart onClick={handleClickLike} className="pp-icons" />
        ) : (
          <AiOutlineHeart onClick={handleClickLike} className="pp-icons" />
        )}
        <AiOutlineMessage className="pp-icons" />
        <AiOutlineShareAlt className="pp-icons" />
      </div>
      <div className="pp-image-details-container">
        <div className="pp-likes">{props.ppLikes} likes</div>
        <div className="pp-date">{props.ppDate}</div>
      </div>
    </div>
  );
}

export default LeftPPBody;
