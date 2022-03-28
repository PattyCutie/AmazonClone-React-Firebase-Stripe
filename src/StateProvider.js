import React, { createContext, useContext, useReducer } from "react";

// This is for preparing data layers
export const StateContext = createContext();

// This will wrap the React App
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is for pull information from the data layer
export const useStateValue = () => useContext(StateContext);