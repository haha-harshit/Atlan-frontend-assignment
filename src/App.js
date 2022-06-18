// import logo from './logo.svg';
import logo from "./assets/Atlan-logo-full.svg"
import React from 'react';
// import './App.css';
import NavBar from './Components/NavBar';
import Aside from "./Components/Aside";
import BodyTabs from "./Components/BodyTabs";

function App() {
  
  let bodyContainerStyle = {
    width: '50%',
    marginLeft: '15%',
    borderBottom: "1px solid darkgrey",
    height: '8rem',
    padding: '0rem 2rem'
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
          <BodyTabs/>
        </div>

        <aside style={{width: '35%', float: 'right', borderLeft: "1px solid darkgrey", borderBottom: "1px solid darkgrey", height: '8rem', marginTop:'-8rem'}}>

                <h2>hey</h2>    
                <p>para</p>
                <p>para 2</p>
                
        </aside>

      </div>
    
    </div>
    </>
  );
}

export default App;
