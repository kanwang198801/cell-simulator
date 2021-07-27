import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  nextGenerationOnClick: () => void;
  resetOnClick: () => void;
};

const GameControlersContainer = styled.div`
  margin: 20px;
  display: flex;
`;

const GameControlers: FC<Props> = ({ nextGenerationOnClick, resetOnClick }): ReactElement => {
  return (
    <GameControlersContainer>
      <button onClick={nextGenerationOnClick}>Next Generation</button>
      <button onClick={resetOnClick}>Reset Game</button>
    </GameControlersContainer>
  );
};

export default GameControlers;
