import React, { Component } from "react";
import "./UserName.css";

function UserName(props) {
  return <div className="username">{props.username}</div>;
}

export default UserName;
