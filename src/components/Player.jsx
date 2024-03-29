import { useState } from "react";
import React from "react";

export default function Player({initialname, symbol, isActive, onChangeName}) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName ] = useState(initialname);

  function handleEditName() {
    setIsEditing(editing => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if(isEditing === true) {
    editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}></input>
  }

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditName}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}