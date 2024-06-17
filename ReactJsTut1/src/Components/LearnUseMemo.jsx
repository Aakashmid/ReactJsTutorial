import { useState, useMemo } from 'react'

export const LearnUseMemo = () => {

    const [count, setCount] = useState(0)


    //useMemo is used to call a function which return some value , which is dependent to a  a variable or component
    const isCountTen=useMemo(()=>{
        console.log("isCountTen called !!");
        if(count===10){
            return "yes"
        }
        return "no"

    },[count])  //run when count changes and first time when component mounted

    const [random_num, set_random_num] = useState(null)
    const handleRandom=()=>{
        const newRandomNum=Math.floor(Math.random()*100)+1;  //generate random number b/w 1 to 100
        set_random_num(newRandomNum)
    }
    return (
        <>
            <h1>Is {count}  equal to 10 ? -- {isCountTen}</h1>
            <button onClick={() => { console.log("Increase count "); setCount(count + 1) }}>Increase Count</button>
            <hr />
            <h1>Random Number : {random_num} </h1>
            <button className="" onClick={handleRandom}>Genrate Random Number</button>
        </>
    )
}
