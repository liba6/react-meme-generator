import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  return (
    <div>
      <h1>React Meme Generator</h1>
      <label for="top">Top text </label>
      <input
        id="top"
        value={top}
        onChange={(event) => {
          setTop(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <label for="bottom">Buttom text </label>
      <input
        id="bottom"
        value={bottom}
        onChange={(event) => {
          setBottom(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <br />
      <h2>
        https://api.memegen.link/images/both/{top}/{bottom}.png
      </h2>
      <button
        onClick={() => {
          console.log({ top });
        }}
      >
        Preview
      </button>
    </div>
  );
}

export default App;
