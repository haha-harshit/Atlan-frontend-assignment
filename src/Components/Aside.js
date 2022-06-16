import React from 'react'

export default function Aside() {

    const asideStyle={
        width:'80px',
        position:'absolute'
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
