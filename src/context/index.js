import React, { useState, createContext } from "react";



export const Context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});

    return (
        <Context.Provider value={{ userData, setUserData }}>
            {props.children}
        </Context.Provider>
    )
}