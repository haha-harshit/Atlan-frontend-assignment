import React from 'react'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props) {
    // const {
    //     value,
    //     onChange
    // } = props

    function handleChange(editor, data, value){
        props.setText()
    }
    return (
        // <div className='editorContainer'>
        <>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={props.value}
                className= "code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    theme: 'material',
                    lineNumbers: true,
                    tabindex: "4"
                }}
            />
        </>
        // </div>
    )
}
