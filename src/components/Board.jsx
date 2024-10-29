import React from "react";
import Card from "./Card";
import "./Board.css";
import ProfileIconIndicator from "./ProfileIconIndicator";

function Board() {
  return (
    <div className="board">
      <div className="board-top">
        <div className="left">
          <ProfileIconIndicator />
          <img src="" alt="" className="icon" />
          <p>Abhideep Maity</p>
          <div className="number">1</div>
        </div>
        <div className="right">
          <img src="/images/add.svg" alt="" className="add-icon" />
          <img src="/images/3dot.svg" alt="" className="three-dot-icon" />
        </div>
      </div>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board;
