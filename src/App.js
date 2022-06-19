// import logo from './logo.svg';
import logo from "./assets/Atlan-logo-full.svg"
import React from 'react';
// import './App.css';
import NavBar from './Components/NavBar';
import Aside from "./Components/Aside";
import BodyTabs from "./Components/BodyTabs";
import Editor from "./Components/Editor";
import CodeMirror from 'codemirror';


function App() {
  
  const inheritedHeight="inherit";
  
  let bodyContainerStyle = {
    width: '50%',
    marginLeft: '15%',
    borderBottom: "1px solid darkgrey",
    height: '37rem',
    padding: '0rem 2rem'
  }

  let rightAsideStyle = {width: '35%',
    float: 'right',
    borderLeft: "1px solid darkgrey",
    borderBottom: "1px solid darkgrey",
    marginTop: "-37rem",
    height: inheritedHeight
  }

  return (
    <>
    <div className="mainOutter">

      <div className="forNavBar" style={{height: '5rem'}}>
        <NavBar logo={logo}/>
        <hr style={{margin: "0.5rem"}}/>
      </div>

      <div className="OutterBelowNavBar" style={{height: '37rem', marginTop: "4rem"}}>
        <Aside/>
      
        <div className="container forEditor" style={bodyContainerStyle}>
          <div id="tabs" style={{height: inheritedHeight}}>
            <BodyTabs/>
          </div>
        </div>



        <aside style={rightAsideStyle}>

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
