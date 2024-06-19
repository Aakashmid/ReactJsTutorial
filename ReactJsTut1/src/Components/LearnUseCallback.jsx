import {useCallback,useState} from 'react'
import { GenerateRandomNumber } from './GenerateRandomNumber'
export const LearnUseCallback = () => {
    const [num,setNum]=useState(0)
    const [randomNum,setrandomNum]=useState(0)

    // const generateRandomNumber=()=>{
    //     const newRandomNum=Math.floor(Math.random()*100)+1;
    //     setrandomNum(newRandomNum);
    // }

    const generateRandomNumber=useCallback(()=>{
        const newRandomNum=Math.floor(Math.random()*100)+1;
        setrandomNum(newRandomNum);
    },[randomNum])


  return (
    <div>
        <GenerateRandomNumber randomNumber={randomNum} generateRandomNumber={generateRandomNumber}/>

{/* whenever increase count button is clicked the generateRandooNumber component is re-rendered  , so we use callback function which enures that generateRandomNumber componet is re-render when it props will change(we write dependencies in array) */}
        <h1>Number: {num}</h1>
        <button onClick={()=>setNum(num+1)}>Increase Number</button>
    </div>
  )
}
