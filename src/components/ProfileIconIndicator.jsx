import React from "react";
import "./ProfileIconIndicator.css";

function ProfileIconIndicator() {
  return (
    <div className="profile-icon">
      <img src="/images/profile-icon.svg" alt="" className="profile" />
      <img src="/images/circle-light.svg" alt="" className="indicator-icon" />
    </div>
  );
}

export default ProfileIconIndicator;
