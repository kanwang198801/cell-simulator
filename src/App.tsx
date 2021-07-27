import React, { useState } from 'react';
import Board from './components/Board';
import GameControlers from './components/GameControlers';
import { initCells, toggleCell } from './utils';
import './App.css';

const App: React.FC = () => {
  const [cells, setCells] = useState(() => initCells());

  const cellOnClick = (rowIndex: number, colIndex: number) => {
    const newGrid = toggleCell(cells, rowIndex, colIndex);
    setCells(newGrid);
  };

  return (
    <>
      <Board cells={cells} onClick={cellOnClick} />
      <GameControlers
        nextGenerationOnClick={() => {
          console.info('clicked');
        }}
        resetOnClick={() => setCells(initCells())}
      />
    </>
  );
};

export default App;
