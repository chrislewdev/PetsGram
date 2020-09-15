import React, { Component } from "react";
import "./TopPanel.css";
import {
  FiHome,
  FiSearch,
  FiPlusCircle,
  FiMessageCircle,
  FiUser,
  FiGlobe,
} from "react-icons/fi";

function TopPanel() {
  return (
    <div className="top-panel-container">
      <div className="icons-container">
        <FiHome className="icons" />
        <FiGlobe className="icons" />
        <FiPlusCircle className="icons" />
        <FiMessageCircle className="icons" />
        <FiUser className="icons" />
      </div>
      <div className="title-container">
        <h1 className="title">PetsGram</h1>
      </div>
      <div className="searchbar-container">
        <input type="text" className="searchbar" placeholder="Lookup ..." />
        <div className="search-icon">
          <FiSearch className="icons" />
        </div>
      </div>
    </div>
  );
}

export default TopPanel;
