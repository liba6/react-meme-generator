import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  return (
    <div>
      <h1>React Meme Generator</h1>
      <label for="top">Write the top text </label>
      <input id="top" value={setTop} />
      <br />
      <br />
      <label for="bottom"> Write the bottom text </label>
      <input id="bottom" value={setBottom} />
      <br />
      <br />
      <button
        onClick={() => (
          <h2>
            'https://api.memegen.link/images/buzz/{top}/{bottom}.gif'
          </h2>
        )}
      >
        Preview
      </button>
    </div>
  );
}

export default App;
