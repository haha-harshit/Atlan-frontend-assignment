// import logo from './logo.svg';
import logo from "./assets/Atlan-logo-full.svg"
import React from 'react';
// import './App.css';
import NavBar from './Components/NavBar';
import Aside from "./Components/Aside";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Header from './Components/Header';

function App() {
  
  return (
    <>
    <div>
      <NavBar logo={logo}/>
      <hr style={{margin: "0.5rem"}}/>
    </div>

    <Aside/>  

    <div className="container">
      body
    </div>
    </>
  );
}

export default App;
