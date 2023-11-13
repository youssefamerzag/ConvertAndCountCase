
import { useState } from 'react';
import './App.css';

function App() {

  const [words , setwords] = useState('')
  const [wordsres , setwordsres] = useState(0)
  const [lettersres , setlettersres] = useState(0)

  function inp (e) {
    setwords(e.target.value)
  }

  function countwords() {
    const constword = words.split(" ").length
    setwordsres(constword)
  }

  function countletters() {
    const letters = words.length
    setlettersres(letters)
  }

  function highletters() {
    const upperletters = words.toUpperCase()
    setwords(upperletters)
  }

  function lowletters() {
    const lowerletters = words.toLowerCase()
    setwords(lowerletters)
  }

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <p>Type in the textbox</p>
      <textarea value={words} onChange={inp}></textarea><br></br>
      <button onClick={countwords}>Count Words</button>
      <button onClick={countletters}>Count Words</button>
      <button onClick={highletters}>Upper Case</button>
      <button onClick={lowletters}>Lower Case</button>
      <p>Word Counter :</p>
      <h1>{wordsres}</h1>
      <p>Letters Counter :</p>
      <h1>{lettersres}</h1>
    </div>
  );
}

export default App;
