import { useCutomCounter } from "../hooks/useCustomCounter"


export const LearnCustomHooks = () => {
const {count,increaseCount}= useCutomCounter()
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increaseCount} >Increase Count</button>
    </div>
  )
}
