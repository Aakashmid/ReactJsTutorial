import { useState } from "react"

export const LearnUseState = () => {

    // useState is used  create an array contains data and a function to change data's value
    const [data,setData]=useState(0)  // initalize data with 0
    const [dataObj,setdataObj]=useState({x:3,y:5}) 
    // const changeNumber=(num)=>{
    //     setData(num)
    // }
    return (
        <>
        <h1 >Number : {data}</h1>
        <h1 >Object : x: {dataObj.x} ,y: {dataObj.y}</h1>

        {/* for changing data value */}

        {/* <button onClick={()=>changeNumber(5)}>Change Number</button> */}  
        <button onClick={()=>setData(data+1)}>Increase Number</button>  {/* for increase data value*/}
        <button onClick={()=>setData(5)}>Change Number</button>


        {/* for changing dataObj value */}
        <button  onClick={()=>setdataObj({x:4,y:6})}>Change Object Value </button>
        </>
    )
}
