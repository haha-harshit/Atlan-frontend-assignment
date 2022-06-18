import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Editor from './Editor';


function BodyTabs() {

    return (
    <>
        <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
      <Tab eventKey="home" title="Home">
          <Editor
          value="This is HOME" 
        //   onChange={{}}
          />
      </Tab>
      
      <Tab eventKey="profile" title="Profile">
          <Editor
          value="This is Profile"
        //   onChange={{}}
          />
      </Tab>

      <Tab eventKey="contact" title="Contact">
          <Editor
          value="Contact Here"
        //   onChange={{}}
          />
      </Tab>
    </Tabs>
    </>
    )
}

export default BodyTabs