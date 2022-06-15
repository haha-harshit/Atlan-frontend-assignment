// import logo from './logo.svg';
import logo from "./assets/Atlan-logo-full.svg"
import React from 'react';
// import './App.css';
import NavBar from './Components/NavBar';
// import Header from './Components/Header';

function App() {
  return (
    <>
    <div>
      <NavBar logo={logo}/>
      <hr style={{margin: "0.5rem"}}/>
    </div>
    </>
  );
}

export default App;
