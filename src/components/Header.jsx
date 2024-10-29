import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [openDisplayDropdown, setDisplayDropdown] = useState(false);
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
              <div className="select-box">
                <p>Status</p>
                <img src="/images/down.svg" alt="" className="dropdown-icon" />
              </div>
            </div>
            <div className="optns">
              <p>Ordering</p>
              <div className="select-box">
                <p>Priority</p>
                <img src="/images/down.svg" alt="" className="dropdown-icon" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
