import React from "react";

// Custom Hook to save ToDos on sessionStorage
function useSessionStorage(itemName, initialValue){
    const sessionStorageItem = sessionStorage.getItem(itemName);
    let parsedItem;

    if(!sessionStorageItem){
        sessionStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(sessionStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newArray) => {
        const stringifiedItem = JSON.stringify(newArray);
        sessionStorage.setItem(itemName, stringifiedItem);
        setItem(newArray);
    }
    return [item, saveItem];
}


export { useSessionStorage };