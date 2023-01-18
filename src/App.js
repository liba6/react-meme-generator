import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  return (
    <div>
      <h1>React Meme Generator</h1>
      <label for="top">Write the top text </label>
      <input
        id="top"
        value={top}
        onChange={(event) => {
          setTop(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <label for="bottom"> Write the bottom text </label>
      <input
        id="bottom"
        value={bottom}
        onChange={(event) => {
          setBottom(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={(event) => {
          console.log(`{top} {bottom}`);
        }}
      >
        Preview
      </button>
      <h2>
        {top}
        {bottom}
      </h2>
    </div>
  );
}

export default App;
