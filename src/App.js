import './App.css';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function App() {
  // JSON.parse(localStorage.getItem('top'))
  // JSON.parse(localStorage.getItem('bottom'))

  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [meme, setMeme] = useState('both');

  const url = top
    ? `https://api.memegen.link/images/${meme}/${top.replace(
        '?',
        '~q',
      )}/${bottom.replace('?', '~q')}.png`
    : `https://api.memegen.link/images/${meme}/-/${bottom.replace(
        '?',
        '~q',
      )}.png`;

  return (
    <div>
      <h1>React Meme Generator</h1>
      <div className="labels">
        <label htmlFor="meme">Meme template</label>
        <input
          className="input"
          id="meme"
          value={meme}
          onChange={(event) => {
            setMeme(event.currentTarget.value);
          }}
        />
        <label htmlFor="top">Top text </label>
        <input
          className="input"
          id="top"
          onChange={(event) => {
            setTop(event.currentTarget.value);
          }}
          value={top}
        />
        <br />
        <br />
        <label htmlFor="bottom">Bottom text </label>
        <input
          className="input"
          id="bottom"
          value={bottom}
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
        />
      </div>
      <br />
      <br />

      <button
        className="btn"
        onClick={() => {
          saveAs(url, 'meme.jpg');
          localStorage.setItem('meme', JSON.stringify(`${meme}`));
          localStorage.setItem('top', JSON.stringify(`${top}`));
          localStorage.setItem('bottom', JSON.stringify(`${bottom}`));
        }}
      >
        Download
      </button>
      <br />
      <br />
      <br />

      <img data-test-id="meme-image" src={url} alt="meme" />
    </div>
  );
}
export default App;
