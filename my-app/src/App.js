import React, { useState } from 'react';
import Smiley from './Smiley';
import ShowResults from './ShowResults';
import './App.css';

const App = () => {
  const [smiles, setSmiles] = useState([
    { name: '😄', count: 0 },
    { name: '😊', count: 0 },
    { name: '😃', count: 0 },
  ]);

  return (
    <div className="app">
      <h1>Smiley Voting App</h1>
      <div className="smiley-list">
        {smiles.map((smile, index) => (
          <Smiley key={index} name={smile.name} />
        ))}
      </div>
      <button className="show-results-button">Show Results</button>
      <ShowResults smiles={smiles} />
    </div>
  );
};

export default App;