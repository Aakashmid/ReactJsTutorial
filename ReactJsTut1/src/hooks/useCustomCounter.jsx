import { useState } from "react"


export const useCutomCounter = () => {

    const [count, setCount] = useState(0)
    const increaseCount=()=>{
        setCount(count+1);
    }
    return {count,increaseCount}
}
