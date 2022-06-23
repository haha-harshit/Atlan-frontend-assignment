
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Editor from './Editor';


function BodyTabs() {
    
    const [Text, setText] = useState("")

    return (
    <>
        {/* {document.querySelector("div.tab-content").length>0?
            :"Nothing to preview. Click on the"} */}
            <Tabs
            defaultActiveKey=""
            id="uncontrolled-tab-example"
            className="harshit mb-3"
            // unmountOnExit="false"
            // onClick={handleTabClick}
            // onClick={handleTabClick}
            // onAbortCapture={handleAbort}
            // onSelect={handleTabClick(activeKey)},
            >
    
            
            <Tab eventKey="customers" title="Customers">
                <Editor
                value="SELECT * FROM Customers;"
                // text={Text}
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

    </>
    )
}

export default BodyTabs