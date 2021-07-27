import React, { FC, ReactElement } from 'react';
import { COLS } from '../constants';
import { Cells } from '../types';
import styled, { css } from 'styled-components';

type Props = {
  cells: Cells;
  onClick: (rowIndex: number, colIndex: number) => void;
};

type BoardContainerType = {
  cols: number;
};

type SingleCell = {
  value: number;
};

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: BoardContainerType) => props.cols}, 25px);
`;

const SingleCell = styled.div<SingleCell>`
  ${css`
    background-color: ${(props: SingleCell) => (props.value === 1 ? '#000' : 'transparent')};
  `}
`;

const Board: FC<Props> = ({ cells, onClick }): ReactElement => {
  return (
    <BoardContainer cols={COLS}>
      {cells.map((rows, rowIndex) =>
        rows.map((col, colIndex) => (
          <SingleCell
            key={`${rowIndex}-${colIndex}`}
            onClick={() => onClick(rowIndex, colIndex)}
            className="cell"
            value={cells[rowIndex][colIndex]}
          />
        )),
      )}
    </BoardContainer>
  );
};

export default Board;
