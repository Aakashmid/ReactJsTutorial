import { useEffect, useState } from "react";

const useTheme=(key,defaultValue)=>{
    const [value,setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key)) || String(defaultValue);  // return default value when key is not found in localstorage
        }catch(e){
            console.log(e);
            currentValue = defaultValue;
        }
        return currentValue;
    });

    // set theme value in local storage when value change
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
    return [value,setValue];
}

export default useTheme;