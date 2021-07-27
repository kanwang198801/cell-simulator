import React, { useState } from 'react';
import Board from './components/Board';
import GameControlers from './components/GameControlers';
import { initCells, toggleCell, runNextGeneration } from './utils';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  margin: auto;
`;

const App: React.FC = () => {
  const [cells, setCells] = useState(() => initCells());

  const cellOnClick = (rowIndex: number, colIndex: number) => {
    const newGrid = toggleCell(cells, rowIndex, colIndex);
    setCells(newGrid);
  };

  return (
    <Container>
      <Board cells={cells} onClick={cellOnClick} />
      <GameControlers
        nextGenerationOnClick={() => {
          setCells((preCells) => runNextGeneration(preCells));
        }}
        resetOnClick={() => setCells(initCells())}
      />
    </Container>
  );
};

export default App;
