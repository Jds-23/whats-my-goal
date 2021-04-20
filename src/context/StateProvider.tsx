import React, { createContext, ReactNode, useContext,useState } from "react";

interface StateContextInterface{
    state:String;
    setState:Function;
}
interface Props{
    children:ReactNode;
}

export const StateContext = createContext<StateContextInterface | undefined>(undefined);


export const StateProvider = ({ children }:Props) => {
    const [state,setState]=useState("What")
    return(
    <StateContext.Provider value={{state,setState}}>
        {children}
    </StateContext.Provider>
)};


export const useStateValue = () => useContext(StateContext);