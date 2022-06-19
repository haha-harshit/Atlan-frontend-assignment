import React from 'react'
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import Form from 'react-bootstrap/Form';


// import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {

    // function handleChange(editor, data, value){
    //     props.setText(value)
    // }
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

        <Form.Control as="textarea" placeholder="" style={{height: "7rem", resize: "none"}}/>

        </>
        // </div>
    )
}
