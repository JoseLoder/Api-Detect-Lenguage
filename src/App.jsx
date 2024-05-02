import { useState } from 'react';
import './App.css'

import DetectLanguage from 'detectlanguage';

let detectlanguage = new DetectLanguage(import.meta.env.VITE_DETECT_LANGUAGE_API_KEY);

function App() {
  const [phrase, setPhrase] = useState('');
  const [language, setLanguage] = useState('');


  const handleInputChange = (e) => {
    setPhrase(e.target.value);
  }

  const handleButton = () => {
    if (!phrase) {
      alert('Por favor, introduzca una frase');
      return;
    }

    detectlanguage.detect(phrase).then(function (result) {
      setLanguage(result[0].language.toUpperCase());
    });
  }

  return (
    <>
      <h1>API Detect language</h1>
      <input onChange={handleInputChange} type="text" placeholder="Introduzca la frase" />
      <button onClick={handleButton}>Detectar idioma</button>
      <p>La frase es ({language})</p>
    </>
  )
}

export default App
