import React from "react";
import "./Card.css";
import ProfileIconIndicator from "./ProfileIconIndicator";

const priorityIcons = {
  0: "/images/noP.svg",
  1: "/images/lowP.svg",
  2: "/images/medP.svg",
  3: "/images/highP.svg",
  4: "/images/urgentP.svg",
};

const statusIcons = {
  Todo: "/images/To-do.svg",
  "In progress": "/images/in-progress.svg",
  Backlog: "/images/Backlog.svg",
  Done: "/images/Done.svg",
  Cancelled: "/images/Cancelled.svg",
};

function Card({ ticket, groupBy, users }) {
  const value = users.find((user) => user.id === ticket.userId)?.name;

  return (
    <div className="card">
      <div className="cam">
        <span className="number">{ticket.id}</span>
      </div>
      <div className="desc-box">
        {groupBy !== "Status" && ticket.status && (
          <img
            src={statusIcons[ticket.status]}
            alt="Status Icon"
            className="status-icon"
          />
        )}
        <div className="text">{ticket.title}</div>
      </div>
      <div className="bottom">
        <div className="box">
          {groupBy !== "priority" && ticket.priority && (
            <img
              src={priorityIcons[ticket.priority]}
              alt="Priority Icon"
              className="icon"
            />
          )}
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
      {groupBy !== "User" && (
        <div className="card-profile">
          <ProfileIconIndicator value={value} users={users} />
        </div>
      )}
    </div>
  );
}

export default Card;
