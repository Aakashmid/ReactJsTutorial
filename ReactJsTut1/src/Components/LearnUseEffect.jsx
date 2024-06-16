import { useEffect, useState } from "react"

export const LearnUseEffect = () => {

    // for increase number
    const [count,setCount]=useState(1)


    // for generating random number
    const [random_num, set_random_num] = useState(null)
    const handleRandom=()=>{
        const newRandomNum=Math.floor(Math.random()*100)+1;  //generate random number b/w 1 to 100
        set_random_num(newRandomNum)
    }


    // Example 1 : It runs each time when component is mounted(first time render) and re-render
    // useEffect(()=>{
        //     console.log("UseEffect Called");
        // })
        
        
    // Example 2 : It runs each time when component is mounted([] means no dependencies)
    // useEffect(()=>{
    //     console.log("UseEffect Called");
    // },[])
    
    
    // Example 3 : Runs when component is mounted and whenever dependence changes 
    // useEffect(()=>{
    //     console.log("UseEffect Called");
    // },[count])  //call when count changes
    
    
    // Example 4 : The cleanup function(the function u return from useEffect) runs when the component unmount or when the dependencies in dependency array changes .  since count is in the dependency array , whenever the count changes the cleanup function is called before the new effect run .

    useEffect(()=>{
        console.log("UseEffect Called");
        return ()=>{
            console.log("component will unmount !!")
        }
    },[count])  //call when count changes

    return (
        <>
            <h1>Count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <hr />
            <h1>Random Number : {random_num} </h1>
            <button className="" onClick={handleRandom}>Genrate Random Number</button>
        </>
    )
}
