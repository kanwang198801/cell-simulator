import React, { FC, ReactElement, memo } from 'react';
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
    <GameControlersContainer id="game-controllers">
      <button onClick={nextGenerationOnClick} id="next-generation-button">
        Next Generation
      </button>
      <button onClick={resetOnClick} id="reset-game-button">
        Reset Game
      </button>
    </GameControlersContainer>
  );
};

export default memo(GameControlers);
