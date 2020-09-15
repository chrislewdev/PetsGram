import React, { Component, useState } from "react";
import "./PPFollowing.css";

function PPFollowing() {
  const [isFollowing, setFollowing] = useState(false);

  function handleClick() {
    setFollowing(!isFollowing);
  }

  return (
    <div onClick={handleClick}>
      {isFollowing ? (
        <div className="pp-following">Following</div>
      ) : (
        <button className="pp-follow-button">Follow</button>
      )}
    </div>
  );
}

export default PPFollowing;
