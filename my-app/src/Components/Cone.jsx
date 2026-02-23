import React, { createContext } from 'react'
import Ctwo from './Ctwo'
import Cthree from './Cthree'

export const UserContext = createContext();

const Cone = () => {
    const uname = "Raju";
    return (
        <>
            <div>Cone welcome {uname}</div>
            <UserContext.Provider value={uname}>
            <Ctwo/>
            </UserContext.Provider>
            <Cthree />
        </>
    )
}

export default Cone