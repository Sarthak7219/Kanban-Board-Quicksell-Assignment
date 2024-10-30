import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header({ onGroupingChange, onOrderingChange }) {
  const [openDisplayDropdown, setOpenDisplayDropdown] = useState(false);
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

  const mainDropdownRef = useRef(null);
  const groupingDropdownRef = useRef(null);
  const orderingDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mainDropdownRef.current &&
      !mainDropdownRef.current.contains(event.target) &&
      groupingDropdownRef.current &&
      !groupingDropdownRef.current.contains(event.target) &&
      orderingDropdownRef.current &&
      !orderingDropdownRef.current.contains(event.target)
    ) {
      setOpenDisplayDropdown(false);
      setShowGroupingOptions(false);
      setShowOrderingOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="dropdown-cont" ref={mainDropdownRef}>
        <div
          className="option-box"
          onClick={() => setOpenDisplayDropdown((prev) => !prev)}
        >
          <img src="/images/Display.svg" alt="" className="icon" />
          <div className="text">Display</div>
          <img src="/images/down.svg" alt="" className="dropdown" />
        </div>

        {openDisplayDropdown && (
          <div className="option-box-open">
            <div className="optns">
              <p>Grouping</p>
              <div className="select-dropdown-cont" ref={groupingDropdownRef}>
                <div
                  className="select-box"
                  onClick={() => setShowGroupingOptions((prev) => !prev)}
                >
                  <p>{grouping}</p>
                  <img
                    src="/images/down.svg"
                    alt=""
                    className="dropdown-icon"
                  />
                </div>
                {showGroupingOptions && (
                  <div className="dropdown-options">
                    <p
                      onClick={() => handleGroupingSelect("Status")}
                      style={
                        grouping === "Status"
                          ? { fontWeight: "800", fontSize: "11.5px" }
                          : {}
                      }
                    >
                      Status
                    </p>
                    <p
                      onClick={() => handleGroupingSelect("User")}
                      style={
                        grouping === "User"
                          ? { fontWeight: "800", fontSize: "11.5px" }
                          : {}
                      }
                    >
                      User
                    </p>
                    <p
                      onClick={() => handleGroupingSelect("Priority")}
                      style={
                        grouping === "Priority"
                          ? { fontWeight: "800", fontSize: "11.5px" }
                          : {}
                      }
                    >
                      Priority
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="optns">
              <p>Ordering</p>
              <div className="select-dropdown-cont" ref={orderingDropdownRef}>
                <div
                  className="select-box"
                  onClick={() => setShowOrderingOptions((prev) => !prev)}
                >
                  <p>{ordering}</p>
                  <img
                    src="/images/down.svg"
                    alt=""
                    className="dropdown-icon"
                  />
                </div>
                {showOrderingOptions && (
                  <div className="dropdown-options">
                    <p
                      onClick={() => handleOrderingSelect("Priority")}
                      style={
                        ordering === "Priority"
                          ? { fontWeight: "800", fontSize: "11.5px" }
                          : {}
                      }
                    >
                      Priority
                    </p>
                    <p
                      onClick={() => handleOrderingSelect("Title")}
                      style={
                        ordering === "Title"
                          ? { fontWeight: "800", fontSize: "11.5px" }
                          : {}
                      }
                    >
                      Title
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="name">
        Submitted by - <span>Sarthak Rangari (21117111)</span>
      </p>
    </div>
  );
}

export default Header;
