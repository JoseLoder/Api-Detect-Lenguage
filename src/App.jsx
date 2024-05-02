import { useState } from 'react';
import './App.css'

function App() {
  const [phrase, setPhrase] = useState('');
  const [language, setLanguage] = useState('');

  const handleInputChange = (e) => {
    setPhrase(e.target.value);
  }

  const handleButton = () => {
    setLanguage(phrase);
  }

  return (
    <>
      <h1>React App</h1>
      <input onChange={handleInputChange} type="text" placeholder="Introduzca la frase" />
      <button onClick={handleButton}>Detectar idioma</button>
      <p>La frase es {language}</p>
    </>
  )
}

export default App
