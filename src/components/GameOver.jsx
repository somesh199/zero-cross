import React from "react";

export default function GameOver({winner, onRematch}) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>You won, {winner}</p>}
        {!winner && <p>It's a Draw!</p>}
        <p>
            <button onClick={onRematch}>Rematch!</button>
        </p>
    </div>
}