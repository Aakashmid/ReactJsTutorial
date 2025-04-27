import { useEffect, useState } from "react"

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(false)
    const [winner, setWinner] = useState(null)
    const Square = ({ value, onSquareClick }) => {
        return <button className="bg-white border cursor-pointer border-gray-300 rounded-lg px-4 text-center font-bold text-gray-500 hover:bg-gray-100 focus:outline-none  text-[3rem] aspect-square" onClick={onSquareClick}>{value || '\u00A0'}</button>
    }


    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
            }
        }
        return null
    }

    const handleSquareClick = (index) => {
        if (board[index] || winner) {
            return
        }
        const nextBoard = [...board]
        nextBoard[index] = xIsNext ? 'X' : 'O'
        setBoard(nextBoard)
        setXIsNext(!xIsNext)
       
    }


    useEffect(() => {
        calculateWinner()
    }, [board])


    const handleReset = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(!xIsNext)
        setWinner(null)
    }
    return <div className=" ">
        <div className="p-5 grid grid-cols-3 grid-rows-3  mt-20  w-fit mx-auto">
            {board.map((cell, index) => (
                <Square key={index} value={cell} onSquareClick={() => handleSquareClick(index)} />
            ))}
        </div>
        <div className="p-2 text-lg mt-10 w-fit mx-auto flex items-center gap-10 ">
            <p className="">
            {winner ? 'Winner is ' + winner : null}
            </p>
            <button className="p-2 rounded-lg bg-gray-400 hover:bg-gray-300 cursor-pointer" onClick={()=>handleReset()} >
                Reset 
            </button>

        </div>
    </div>

}