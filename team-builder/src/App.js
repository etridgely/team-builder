import React, { useState } from 'react';
import logo from './logo.svg';
import data from './data';
import Form from './Form';
import Teammate from './Teammate';
import './App.css';

function App() {
  const [teammate, setTeam] = useState(data);

  const addNewTeammate = newTeammate => {
    setTeam([...teammate, newTeammate]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the A-Team
        </p>
        <Form addNewTeammate={addNewTeammate}/>
        <Teammate teammateList={teammate}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
