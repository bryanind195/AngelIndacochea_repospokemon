import React from 'react';
import Main from './Components/Main';
import Header from './Header';
import './Components/Styles/style.css';

function App() {
  return (
    <div className='App' >
       <Header
       titulo = "POKEMONS"
       />
    <>
      <Main/>
    </>
    </div>
  );
}

export default App;