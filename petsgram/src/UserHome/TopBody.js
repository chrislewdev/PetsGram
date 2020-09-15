import React, { Component } from "react";
import "./TopBody.css";
import DisplayPicture from "../GeneralComponents/DisplayPicture";
import UserName from "../GeneralComponents/UserName";
import DisplayName from "../GeneralComponents/DisplayName";
import Details from "../GeneralComponents/Details";
import Buttons from "../GeneralComponents/Buttons";
import Followers from "../GeneralComponents/Followers";

function TopBody(props) {
  return (
    <div className="topbody-container">
      <div className="displaypicture-container">
        <DisplayPicture />
      </div>
      <div className="followers-container">
        <Followers followersNumber={props.followersNumber} />
      </div>
      <div className="rightpart-container">
        <UserName className="username" username={props.username} />
        <DisplayName className="displayname" displayname={props.displayname} />
        <Details className="details" details={props.details} />
        <div className="buttons-container">
          <Buttons buttonName={"Follow"} />
          <Buttons buttonName={"Message"} />
        </div>
      </div>
    </div>
  );
}

export default TopBody;
