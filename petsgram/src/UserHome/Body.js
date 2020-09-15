import React, { Component } from "react";
import TopBody from "./TopBody";
import BottomBody from "./BottomBody";
import "./Body.css";
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import p3 from "../Images/p3.jpg";
import p4 from "../Images/p4.jpg";
import p5 from "../Images/p5.jpg";
import p6 from "../Images/p6.jpg";
import p7 from "../Images/p7.jpg";
import p8 from "../Images/p8.jpg";
import p9 from "../Images/p9.jpg";

function Body() {
  const user = {
    followersNumber: "1,037,221",
    username: "doggo_22",
    displayname: "Lewis",
    details:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
  };

  const userPhotos = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

  return (
    <div className="background">
      <div className="body-container">
        <TopBody
          followersNumber={user.followersNumber}
          username={user.username}
          displayname={user.displayname}
          details={user.details}
        />
        <BottomBody userPhotos={userPhotos} />
      </div>
    </div>
  );
}

export default Body;
