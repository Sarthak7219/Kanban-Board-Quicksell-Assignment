import "./App.css";
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('Status');
  const [sortBy, setSortBy] = useState('Priority');
  const [groupValues, setGroupValues] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Update unique group values whenever tickets or groupBy changes
  useEffect(() => {
    const uniqueGroupValues = () => {
      let values;

      if (groupBy === 'User') {
        // Map over users for 'User' groupBy
        values = users.map(user => user['name']);
      } else {
        // Map over tickets for other groupBy
        values = tickets.map(ticket => ticket[groupBy.toLowerCase()]);
      }

      // Remove duplicates and set the groupValues state
      setGroupValues([...new Set(values)]);
    };

    uniqueGroupValues();
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
      <Header onGroupingChange={handleGroupingChange} onOrderingChange={handleOrderingChange} />
      <div className="outer_cont">
        <div className="container">
          
            <Board style={{display:'flex',gap:'5rem' }} tickets={tickets} users={users} groupValues={groupValues} groupBy={groupBy} sortBy={sortBy} />
        
        </div>
      </div>
    </div>
  );
}

export default App;
