import React, { useEffect, useRef, useState } from "react"
import { calculateWinner } from "./helper";

import Board from "./components/board"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào

const App = () => {
    
    const [board , setBoard] = useState(Array(9).fill(null));
    const [boardOld, setBoardOld] = useState([]||prevBoardRef.current)
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)
    const prevBoardRef = useRef(board);
    
    useEffect(() => {
        prevBoardRef.current = board;
      }, [board]);

    const handleUndo= () => {
        // console.log(boardOld)
        setBoard(boardOld)
        setXIsNext(!xIsNext);
        
    }

    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        const boardOld = prevBoardRef.current
        setBoardOld(boardOld)
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true);
    }
    
    
    return <div className="box-content">
        <div>{winner ? `winner is ${winner}`:"Chưa có người chiến thắng"}</div>
    <div className="h-64 w-64 flex justify-center items-center ">
        <Board  cells ={board}  onClick={handleClick}></Board> 
        
        
        
    </div>
    <button className="reset-game" onClick={handleResetGame}>Reset Game</button>
    <button className="reset-game" onClick={handleUndo}>Undo</button>
    </div>;
}

export default App