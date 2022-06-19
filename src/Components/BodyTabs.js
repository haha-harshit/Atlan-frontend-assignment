import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Editor from './Editor';


function BodyTabs() {

    const [Text, setText] = useState("")

    return (
    <>
        <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
      <Tab eventKey="home" title="Home">
          <Editor
          value={Text}
          setText={setText}
        //   onChange={{}}
          />
      </Tab>
      
      <Tab eventKey="profile" title="Profile">
          <Editor
          value={Text}
        //   onChange={{}}
          />
      </Tab>

      <Tab eventKey="contact" title="Contact">
          <Editor
          value={Text}
        //   onChange={{}}
          />
      </Tab>
    </Tabs>
    </>
    )
}

export default BodyTabs