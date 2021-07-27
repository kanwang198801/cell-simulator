import React, { FC, ReactElement } from 'react';
import { COLS } from '../constants';
import Cell from './Cell';
import { Cells } from '../types';
import styled from 'styled-components';

type Props = {
  cells: Cells;
  onClick: (rowIndex: number, colIndex: number) => void;
};

type BoardContainerType = {
  cols: number;
};

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: BoardContainerType) => props.cols}, 25px);
`;

const Board: FC<Props> = ({ cells, onClick }): ReactElement => {
  return (
    <BoardContainer cols={COLS}>
      {cells.map((rows, rowIndex) =>
        rows.map((col, colIndex) => <Cell cells={cells} rowIndex={rowIndex} colIndex={colIndex} onClick={onClick} />),
      )}
    </BoardContainer>
  );
};

export default Board;
