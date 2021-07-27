import React, { FC, ReactElement, memo } from 'react';
import { Cells } from '../types';
import styled from 'styled-components';

type Props = {
  rowIndex: number;
  colIndex: number;
  cells: Cells;
  onClick: (rowIndex: number, colIndex: number) => void;
};

type SingleCellType = {
  value: number;
};

const SingleCell = styled.div`
  width: 25px;
  height: 25px;
  border: solid 1px #f5f5f5;
  box-sizing: border-box;
  background-color: ${(props: SingleCellType) => (props.value === 1 ? 'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 0)')};
`;

const Cell: FC<Props> = ({ rowIndex, colIndex, cells, onClick }): ReactElement => {
  return (
    <SingleCell
      key={`${rowIndex}-${colIndex}`}
      onClick={() => onClick(rowIndex, colIndex)}
      value={cells[rowIndex][colIndex]}
      className="cell"
    />
  );
};

export default memo(Cell);
