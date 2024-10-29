import React from "react";
import Card from "./Card";
import "./Board.css";
import ProfileIconIndicator from "./ProfileIconIndicator";

const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

function Board({ tickets, users, groupValues, groupBy, sortBy }) {
  return (
    <div className="board ">
      {groupValues.map((value) => {
        // Check if the value corresponds to a user name
        const isUser = users.some((user) => user.name === value);

        // Filter tickets based on the current group value
        const filteredTickets = tickets.filter(
          (ticket) =>
            ticket[groupBy.toLowerCase()] === value ||
            (isUser &&
              ticket.userId === users.find((user) => user.name === value)?.id)
        );

        // Sort the filtered tickets based on the sortBy criteria
        const sortedTickets = filteredTickets.sort((a, b) => {
          if (sortBy.toLowerCase() === "title") {
            return a.title.localeCompare(b.title); // Alphabetical sorting by title
          } else if (sortBy.toLowerCase() === "priority") {
            return b.priority - a.priority; // Numerical sorting by priority
          }
          return 0; // Default case: no sorting
        });

        return (
          <div key={value}>
            <div className="board-top">
              <div className="left">
                <ProfileIconIndicator value={value} users={users} />
                <img src="" alt="" className="icon" />
                <p>
                  {groupBy.toLowerCase() === "priority"
                    ? priorityLabels[value]
                    : value}
                </p>
                <div className="number">{sortedTickets.length}</div>
              </div>
              <div className="right">
                <img src="/images/add.svg" alt="Add" className="add-icon" />
                <img
                  src="/images/3dot.svg"
                  alt="More Options"
                  className="three-dot-icon"
                />
              </div>
            </div>
            <motion.div Layout className="cards-container">
              {sortedTickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  groupBy={groupBy}
                  users={users}
                />
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
