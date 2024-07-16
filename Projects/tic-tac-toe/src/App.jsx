import { useState } from "react"

const Square = ({value,onSquareClick}) => {
  return (
    <li className="square w-14 h-14 text-2xl text-center  p-2 border border-gray-300 list-none cursor-pointer" onClick={onSquareClick}>{value}</li>
  )
}


const Board = () => {
  const [squares,setSquares]=useState(Array(9).fill(null))

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <ul className="flex">
        <Square onSquareClick={()=>handleClick(0)} value={squares[0]} />
        <Square onSquareClick={()=>handleClick(1)} value={squares[1]} />
        <Square onSquareClick={()=>handleClick(2)} value={squares[2]} />
      </ul>
      <ul className="flex">
        <Square onSquareClick={()=>handleClick(3)} value={squares[3]} />
        <Square onSquareClick={()=>handleClick(4)} value={squares[4]} />
        <Square onSquareClick={()=>handleClick(5)} value={squares[5]} />
      </ul>
      <ul className="flex">
        <Square onSquareClick={()=>handleClick(6)} value={squares[6]} />
        <Square onSquareClick={()=>handleClick(7)} value={squares[7]} />
        <Square onSquareClick={()=>handleClick(8)} value={squares[8]} />
      </ul>
    </>
  )
}

function App() {


  return (
    <>
      <div className="container w-full   ">
        <div className="board-box relative bg-white shadow rounded-md w-[50vw] mx-auto h-[70vh] lg:mt-10 mt-[20%] ">
          <div className="board w-fit">
            <Board />
          </div>
          <button type="button" className="bg-blue-400 text-white py-2 rounded px-4" >Play</button>
        </div>
      </div>
    </>
  )
}

export default App
