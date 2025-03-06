import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)  // to get value of a state using useSelector
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());  // use dispatch to call function of reducer to change state
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncByAmount = () => {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>Count : {count}</h2>
        <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }} className="">
          <button onClick={() => handleIncrement()}>+</button>
          <button onClick={() => handleDecrement()}>-</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
        <br />
        <input type="number"  onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={() => handleIncByAmount()}>Increment by Amount</button>
      </div>

    </>
  )
}

export default App
