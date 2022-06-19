import CodeMirror from 'codemirror';
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Editor from './Editor';


function BodyTabs() {


    const [Text, setText] = useState("")

    return (
    <>
        <Tabs
        defaultActiveKey="customers"
        id="uncontrolled-tab-example"
        className="harshit mb-3"
        >
            <Tab eventKey="customers" title="Customers">
                <Editor
                value="SELECT * FROM Customers;"
                setText={setText}
                
                />
            </Tab>
      
            <Tab eventKey="categories" title="Categories">
                <Editor
                value="SELECT * FROM Categories;"
                setText={setText}
                />
            </Tab>

            <Tab eventKey="employees" title="Employees">
                <Editor
                    value="SELECT * FROM Employees;"
                    // onChange={{}}
                    setText={setText}
                />
            </Tab>
    </Tabs>

    {/* <Editor/> */}
    

    </>
    )
}

export default BodyTabs