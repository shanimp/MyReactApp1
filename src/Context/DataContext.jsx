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

    const updateItem = (id, updatedData) => {
        setItems((prevItems) => 
        prevItems.map((item, index) => {
            console.log(index);

            if (index === Number(id)) {
                return {...item, ...updatedData};
            }
            return item;
        }),
      );
      return items;
    };

    return (
        <DataContext.Provider value={{items, addItem, deleteItem, updateItem}}>
            {children}
        </DataContext.Provider>
    );

}; 
export const useDataNew = () => useContext(DataContext);  

