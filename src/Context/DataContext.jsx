import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext();

export function DataProvider({ children }) {
    const [items, setItems] = useState([]);
    const addItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((items, index) => index !== id));
        return items;
    }
    return (
        <DataContext.Provider value={{items, addItem, deleteItem}}>
            {children}
        </DataContext.Provider>
    );

}; 
export const useDataNew = () => useContext(DataContext);  

