import produce from 'immer';
import { ROWS, COLS } from './constants';
import { Cells } from './types';

const make2DArray = (cols: number, rows: number): Cells => {
  const array: Cells = new Array(cols);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
};

export const initCells = (): Cells => {
  const cells: Cells = make2DArray(COLS, ROWS);
  for (let i = 0; i < COLS; i++) {
    for (let l = 0; l < ROWS; l++) {
      cells[i][l] = 0;
    }
  }
  return cells;
};

export const toggleCell = (cells: Cells, rowIndex: number, colIndex: number): Cells => {
  return produce(cells, (newCells) => {
    newCells[rowIndex][colIndex] = cells[rowIndex][colIndex] ? 0 : 1;
  });
};
