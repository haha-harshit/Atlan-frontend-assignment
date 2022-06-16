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
  
  let bodyContainerStyle = {
    width: '50%',
    marginLeft: '15%',
    borderRight: "1px solid darkgrey",
    borderBottom: "1px solid darkgrey",
    height: '8rem'
  }

  return (
    <>
    <div className="mainOutter">

      <div className="forNavBar">
        <NavBar logo={logo}/>
        <hr style={{margin: "0.5rem"}}/>
      </div>

      <div className="OutterBelowNavBar">
        <Aside/>
      
        <div className="container forEditor" style={bodyContainerStyle}>
          body
        </div>

        {/* <Aside/> */}

      </div>
    
    </div>
    </>
  );
}

export default App;
