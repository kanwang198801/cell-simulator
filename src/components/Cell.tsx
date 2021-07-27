import React, { FC, ReactElement } from 'react';
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
  background-color: ${(props: SingleCellType) => (props.value === 1 ? '#000' : 'transparent')};
`;

const Cell: FC<Props> = ({ rowIndex, colIndex, cells, onClick }): ReactElement => {
  return (
    <SingleCell
      key={`${rowIndex}-${colIndex}`}
      onClick={() => onClick(rowIndex, colIndex)}
      value={cells[rowIndex][colIndex]}
    />
  );
};

export default Cell;
