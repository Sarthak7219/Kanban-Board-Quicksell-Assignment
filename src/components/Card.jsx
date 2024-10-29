import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="cam">
        <p>CAM - </p>
        <span className="number">1</span>
      </div>
      <div className="desc-box">
        <img src="/images/Backlog.svg" alt="" className="status-icon" />
        <div className="text">Create Onboarding Tutorial for New Users</div>
      </div>
      <div className="bottom">
        <div className="box">
          <img src="/images/highP.svg" alt="" className="icon" />
        </div>
        <div className="box">
          <img src="/images/circle-gray.svg" alt="" className="gray-circle" />
          <p>Feature Request</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
