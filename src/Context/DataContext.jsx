import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext();

export function DataProvider({ children }) {
    const [items, setItems] = useState([]);
    const addItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <DataContext.Provider value={{items, addItem}}>
            {children}
        </DataContext.Provider>
    );

}; 
export const useDataNew = () => useContext(DataContext);  

