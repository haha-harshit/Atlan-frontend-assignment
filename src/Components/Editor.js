import React, {useState} from 'react'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import Form from 'react-bootstrap/Form';


// import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {

    let formStyle = {height: "7rem", resize: "none", backgroundColor: "whitesmoke"}
    // function handleChange(editor, data, value){
    //     props.setText(value)
    // }
    const handleOnChange = (event) => {
        setnewText(event.target.value)
    }

    const [newText, setnewText] = useState(props.value)

    return (
        // <div className='editorContainer'>
        <>
            {/* <ControlledEditor 
                onBeforeChange={handleChange}
                value={props.value}
                // className= "code-mirror-wrapper"
                options={{
                    // lineWrapping: true,
                    // lint: true,
                    // theme: 'material',
                    lineNumbers: true,
                    // tabindex: "4"
                }}
            /> */}
            {/* {CodeMirror(document.querySelector('.forEditor'), {
                lineNumbers: true,
                tabSize: 2,
                value: 'console.log("Hello, World");'
            })}  */}

        <Form.Control as="textarea" value={newText} style={formStyle} onChange={handleOnChange}/>

        </>
        // </div>
    )
}
