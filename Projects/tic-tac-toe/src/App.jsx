import { useEffect, useState } from "react"

const Square = ({ value, onSquareClick }) => {
  return (
    <li className={`square w-24 h-20 text-3xl text-center  py-4 border border-gray-300 list-none cursor-pointer ${value === 'X' ? 'text-yellow-600' : 'text-black'} `} onClick={onSquareClick}>{value}</li>
  )
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

  }
  return null;
}



function Board({ xIsNext, squares, onPlay, tie }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {   // if winner is diclared or clicking a square  which already have a value then return to stop further execution
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }



  let winner = calculateWinner(squares);
  let status;
  if (winner || tie) {
    status = 'Game Over'   // status for tracking which player's move is 
  }
  else {
    status = (xIsNext ? 'X ' : 'O ') + "ki bajji ";   // status for tracking which player's move is 
  }


  return (
    <>

      <div className="status text-center my-4 text-xl font-semibold p-2 bg-gradient-to-r from-yellow-700 to-amber-200 rounded-lg"> {status}</div>
      <div className="">
        <div className="board-row flex bg-white  ">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row flex bg-white ">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row flex bg-white ">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];  // on playing a move add new sqare to history
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {  // for moving to previous board state
    setCurrentMove(nextMove);
    setHistory([history[0]])
  }


  // show moves for undo a move
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} className="px-2 text-lg font-medium">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  let tie = null;
  if (!winner && history.length == 10) {
    tie = true
  }
  
  return (
    <div className="container ">
      <div className="game lg:mt-20 mt-32 flex flex-col lg:flex-row items-center lg:justify-around lg:w-[70vw] mx-auto ">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} tie={tie} />
        </div>
        {winner  && (<div className="result-box mt-4 text-center">
          <p className="text-white font-semibold text-3xl">{winner && 'Winner is '+winner}</p>
          <button type="button" onClick={() => jumpTo(0)} className="py-2 px-3 mt-3 text-yellow-900  bg-white hover:bg-amber-200 text-xl font-medium rounded">Restart Game</button>
        </div>)}
        {tie  && (<div className="result-box mt-4 text-center">
          <p className="text-white font-semibold text-3xl">{tie && 'Draw'}</p>
          <button type="button" onClick={() => jumpTo(0)} className="py-2 px-3 mt-3 text-yellow-900  bg-white hover:bg-amber-200 text-xl font-medium rounded">Restart Game</button>
        </div>)}
        <div className="game-info mt-10 hidden">
          <ol >{moves}</ol>
        </div>
      </div>
    </div>
  );
}

