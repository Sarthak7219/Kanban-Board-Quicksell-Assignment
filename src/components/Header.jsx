import React, { useState } from "react";
import "./Header.css";

function Header({ onGroupingChange, onOrderingChange }) {
  const [openDisplayDropdown, setDisplayDropdown] = useState(false);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");
  const [showGroupingOptions, setShowGroupingOptions] = useState(false);
  const [showOrderingOptions, setShowOrderingOptions] = useState(false);

  const handleGroupingSelect = (option) => {
    setGrouping(option);
    onGroupingChange(option); // Pass to App.js
    setShowGroupingOptions(false); // Close dropdown
  };

  const handleOrderingSelect = (option) => {
    setOrdering(option);
    onOrderingChange(option); // Pass to App.js
    setShowOrderingOptions(false); // Close dropdown
  };

  return (
    <div className="navbar">
      <div className="dropdown-cont">
        <div
          className="option-box"
          onClick={() => setDisplayDropdown((prev) => !prev)}
        >
          <img src="/images/Display.svg" alt="" className="icon" />
          <div className="text">Display</div>
          <img src="/images/down.svg" alt="" className="dropdown" />
        </div>

        {openDisplayDropdown && (
          <div className="option-box-open">
            <div className="optns">
              <p>Grouping</p>
              <div
                className="select-box"
                onClick={() => setShowGroupingOptions((prev) => !prev)}
              >
                <p>{grouping}</p>
                <img src="/images/down.svg" alt="" className="dropdown-icon" />
              </div>
              {showGroupingOptions && (
                <div className="dropdown-options">
                  <p onClick={() => handleGroupingSelect("Status")}>Status</p>
                  <p onClick={() => handleGroupingSelect("User")}>User</p>
                  <p onClick={() => handleGroupingSelect("Priority")}>Priority</p>
                </div>
              )}
            </div>

            <div className="optns">
              <p>Ordering</p>
              <div
                className="select-box"
                onClick={() => setShowOrderingOptions((prev) => !prev)}
              >
                <p>{ordering}</p>
                <img src="/images/down.svg" alt="" className="dropdown-icon" />
              </div>
              {showOrderingOptions && (
                <div className="dropdown-options">
                  <p onClick={() => handleOrderingSelect("Priority")}>Priority</p>
                  <p onClick={() => handleOrderingSelect("Title")}>Title</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
