import React, { useContext } from 'react'
import {UserContext} from './Cone'
const Cfive = () => {
    const uname = useContext(UserContext)
    return (
        <div style={{ margin: '10px', border: '2px solid black' }}>Cfive Hi {uname}</div>
    )
}

export default Cfive