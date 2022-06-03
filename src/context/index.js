import React, { useState, createContext } from "react";



export const Context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});

    return (
        <Context.Provider value={{ userData, repos, setUserData, setRepos }}>
            {props.children}
        </Context.Provider>
    )
}