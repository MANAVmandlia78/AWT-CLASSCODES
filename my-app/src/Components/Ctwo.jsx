import React from 'react'
import Cfive from './Cfive'
import Cfour from './Cfour'

const Ctwo = () => {
    return (
        <div style={{ display: "inline-block", margin: '10px', border: '2px solid black' }}>Ctwo
            <Cfour />
            <Cfive/>
        </div>
    )
}

export default Ctwo