import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Board from "./Board";
import "./index.css";

function Game() {
    return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  