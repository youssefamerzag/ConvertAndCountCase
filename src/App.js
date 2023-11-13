
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
    const constword = words.split(" ").filter((word) => word !== '').length;

      setwordsres(constword)
      console.log(wordsres)
  }

  function countLetters() {
    const lettersCount = words.replace(/\s/g, '').length;
    setlettersres(lettersCount);
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
      <div id='buttons'>
        <button onClick={countwords}>Count Words</button>
        <button onClick={countLetters}>Count Letters</button>
        <button onClick={highletters}>Upper Case</button>
        <button onClick={lowletters}>Lower Case</button>
      </div>
      <p>Word Counter :</p>
      <h1>{wordsres}</h1>
      <p>Letters Counter :</p>
      <h1>{lettersres}</h1>
    </div>
  );
}

export default App;
