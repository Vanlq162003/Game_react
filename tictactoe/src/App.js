import React, { useState } from "react"
import { Winner } from "./helper";

import Board from "./components/board"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào

const App = (props) => {
    const [board , setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = Winner(board)


    const handleClick = () => {}


    return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <Board  cells ={board}  onClick={handleClick}></Board>
    </div>
    )
}

export default App