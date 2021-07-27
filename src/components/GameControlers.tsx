import React, { FC, ReactElement, memo } from 'react';
import styled from 'styled-components';

type Props = {
  nextGenerationOnClick: () => void;
  resetOnClick: () => void;
};

const GameControlersContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;

const GameControler = styled.button`
  padding: 10px;
`;

const GameControlers: FC<Props> = ({ nextGenerationOnClick, resetOnClick }): ReactElement => {
  return (
    <GameControlersContainer id="game-controllers">
      <GameControler onClick={nextGenerationOnClick} id="next-generation-button">
        Next Generation
      </GameControler>
      <GameControler onClick={resetOnClick} id="reset-game-button">
        Reset Game
      </GameControler>
    </GameControlersContainer>
  );
};

export default memo(GameControlers);
