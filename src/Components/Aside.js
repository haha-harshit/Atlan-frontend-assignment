import React from 'react'
// import PropTypes from 'prop-types'


export default function Aside() {
    const asideStyle={
        width:'15%',
        position: 'absolute',
        borderRight: "1px solid darkgrey",
        borderBottom: "1px solid darkgrey",
        height: '8rem'
    }


    return (
        <>
            <aside style={asideStyle}>

                <h2>hey</h2>    
                <p>para</p>
                <p>para 2</p>
                
            </aside>
        </>
    )
}
