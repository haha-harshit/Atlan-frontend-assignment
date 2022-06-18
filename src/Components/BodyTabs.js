import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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
        This is Home
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