import React, { Component, useCallback, useState } from "react";
import "./PPBody.css";
import LeftPPBody from "./LeftPPBody";
import RightPPBody from "./RightPPBody";
import p1 from "../Images/p1.jpg";
import dp1 from "../Images/dp1.jpeg";
import s1 from "../Images/s1.png";
import s2 from "../Images/s2.png";
import s3 from "../Images/s3.png";

function PPBody() {
  const user = {
    userDP: dp1,
    username: "doggo",
    following: false,
  };

  const photoObject = {
    image: p1,
    likes: "1578",
    date: "27 MAY 2020",
    details:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
  };

  const sampleCommentsArray = [
    { displayPhoto: s1, username: "catto", comment: "Nice One!" },
    { displayPhoto: s2, username: "cowwo", comment: "Nice Two!" },
    { displayPhoto: s3, username: "ratto", comment: "Mice Three!" },
  ];

  const [commentsArray, setCommentsArray] = useState(sampleCommentsArray);

  function postComment(comment) {
    const currentCommentsArray = commentsArray;

    const newComment = {
      displayPhoto: s1,
      username: "catto",
      comment: comment,
    };

    currentCommentsArray.push(newComment);

    setCommentsArray(currentCommentsArray);

    console.log(commentsArray);
  }

  return (
    <div className="ppbackground">
      <div className="ppbody-container">
        <LeftPPBody
          ppImage={photoObject.image}
          ppLikes={photoObject.likes}
          ppDate={photoObject.date}
        />
        <RightPPBody
          ppUserDP={user.userDP}
          ppUsername={user.username}
          ppFollowing={user.following}
          ppDetails={photoObject.details}
          commentsArray={commentsArray}
          postComment={postComment}
        />
      </div>
    </div>
  );
}

export default PPBody;
