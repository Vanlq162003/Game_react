import React, { useState } from "react"
import { calculateWinner } from "./helper";

import Board from "./components/board"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào

const App = (props) => {
    const [board , setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)


    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        console.log(winner)
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true);
    }


    return (
    <div className="h-[100vh] flex justify-center items-center">
        <Board  cells ={board}  onClick={handleClick}></Board> 
        <button className="reset-game" onClick={handleResetGame}>Reset Game</button>
        <div>{winner ? `winner is ${winner}`:""}</div>
        
    </div>
    );
}

export default App