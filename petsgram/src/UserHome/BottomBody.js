import React, { Component } from "react";
import "./BottomBody.css";
import HomepagePhoto from "./HomepagePhoto";

function BottomBody(props) {
  const photosArray = props.userPhotos;

  const photosRender = photosArray.map((photo) => (
    <HomepagePhoto photo={photo} />
  ));

  return <div className="bottombody-container">{photosRender}</div>;
}

export default BottomBody;
