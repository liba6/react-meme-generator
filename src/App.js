import './App.css';

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
      <button
        onClick={() => (
          <h2>
            {top}
            {bottom}
          </h2>
        )}
      >
        Preview
      </button>
    </div>
  );
}

export default App;
