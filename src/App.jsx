import './App.css'
import React, { useState, useEffect } from 'react'
import MiApi from './components/miApi'
import Buscador from './components/Buscador';

function App() {
  const [info, setInfo] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);


  return (
    <>
      <div>
        <img className='logo' src="https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png" alt="logo digimon" />
      </div>
      <Buscador info={info} setInfo={setInfo} dataOriginal={dataOriginal} setDataOriginal={setDataOriginal} />
      <MiApi info={info} setInfo={setInfo} dataOriginal={dataOriginal} setDataOriginal={setDataOriginal} />
    </>
  );
}

export default App;