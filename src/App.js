import "./App.css";
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("Status");
  const [sortBy, setSortBy] = useState("Priority");
  const [groupValues, setGroupValues] = useState([]);

  // Fetching data from API
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Update unique group values whenever tickets, users, or groupBy changes
  useEffect(() => {
    let values;

    if (groupBy === "User") {
      values = users.map((user) => user.name);
    } else if (groupBy === "Priority") {
      values = [4, 3, 2, 1, 0]; // Priorities sorted from high to low
    } else if (groupBy === "Status") {
      values = ["Todo", "In progress", "Backlog", "Canceled", "Completed"];
    }

    setGroupValues([...new Set(values)]);
  }, [tickets, users, groupBy]);

  // Callback functions to pass to Header
  const handleGroupingChange = (newGroupBy) => {
    setGroupBy(newGroupBy);
  };

  const handleOrderingChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="app">
      <Header
        onGroupingChange={handleGroupingChange}
        onOrderingChange={handleOrderingChange}
      />
      <div className="outer_cont">
        <div className="container">
          <Board
            tickets={tickets}
            users={users}
            groupValues={groupValues}
            groupBy={groupBy}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
