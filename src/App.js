import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [meme, setMeme] = useState('both');

  return (
    <div>
      <h1>React Meme Generator</h1>
      <div className="labels">
        <label for="meme">Meme template</label>
        <input
          id="meme"
          value={meme}
          onChange={(event) => {
            setMeme(event.currentTarget.value);
          }}
        ></input>
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
        <label for="bottom">Bottom text </label>
        <input
          id="bottom"
          value={bottom}
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          ('https://api.memegen.link/images/both/{top}/{bottom}.png');
        }}
      >
        Download
      </button>
      <br />
      <br />
      <br />

      <img
        src="https://api.memegen.link/images/both/{top}/{bottom}.png"
        alt="meme"
      ></img>
    </div>
  );
}

export default App;
