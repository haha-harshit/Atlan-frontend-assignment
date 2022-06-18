import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Editor from './Editor';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';



// import {Controlled as ControlledEditor} from 'react-codemirror2'
// import CodeMirror from 'react-codemirror2'
// CodeMirror(document.getElementById('home'), {
//   lineNumbers: true,
//   tabSize: 2,
//   value: 'console.log("Hello, World");'
// });

function BodyTabs() {
    const [key, setKey] = useState('home');

    
    return (
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {/* <Sonnet /> */}
        <div className='editor-container' id='home'>
          <Editor />
        </div>

      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
        This is Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        {/* <Sonnet /> */}
        Contact here
      </Tab>
    </Tabs>
    )
}

export default BodyTabs