import React from "react";
import "./Card.css";

function Card({ ticket }) {
  return (
    <div className="card">
      <div className="cam">
        <span className="number">{ticket.id}</span>
      </div>
      <div className="desc-box">
        <img
          src="/images/Backlog.svg"
          alt="Status Icon"
          className="status-icon"
        />
        <div className="text">{ticket.title}</div>
      </div>
      <div className="bottom">
        <div className="box">
          <img
            src="/images/highP.svg"
            alt="High Priority Icon"
            className="icon"
          />
        </div>
        <div className="box">
          <img
            src="/images/circle-gray.svg"
            alt="Gray Circle"
            className="gray-circle"
          />
          <p>{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
