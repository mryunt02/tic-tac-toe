import React from 'react'
import { useState } from 'react';

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [initialName, setInitialName] = useState(name);
  function handleEditClick() {
    setIsEditing(wasEditing => !wasEditing);
    if (isEditing) {
      onChangeName(symbol, initialName)
    }

  }
  function handleChange(event) {
    setInitialName(event.target.value);

  }
  let playerName = <span className="player-name">{initialName}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={initialName} onChange={handleChange} />
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>

    </li>
  )
}

export default Player;