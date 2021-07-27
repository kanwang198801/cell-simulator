import produce from 'immer';
import { ROWS, COLS, NEIGHBOURS_LOCATIONS } from './constants';
import { Cells } from './types';

const make2DArray = (cols: number, rows: number): Cells => {
  const array: Cells = new Array(cols);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
};

const countLiveNeighbours = (colIndex: number, rowIndex: number, cells: Cells): number => {
  let liveNeighbourCount = 0;
  NEIGHBOURS_LOCATIONS.forEach(([neighbourX, neighbourY]) => {
    const newColIndex = colIndex + neighbourX;
    const newRowIndex = rowIndex + neighbourY;
    //Do not count neighbours which are out of edges
    const isNewRowIndexInBoard = newRowIndex >= 0 && newRowIndex < ROWS;
    const isNewColIndexInBoard = newColIndex >= 0 && newColIndex < COLS;
    if (isNewRowIndexInBoard && isNewColIndexInBoard) {
      liveNeighbourCount += cells[newColIndex][newRowIndex];
    }
  });
  return liveNeighbourCount;
};

export const initCells = (): Cells => {
  const cells: Cells = make2DArray(COLS, ROWS);
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let colIndex = 0; colIndex < COLS; colIndex++) {
      cells[rowIndex][colIndex] = 0;
    }
  }
  return cells;
};

export const toggleCell = (cells: Cells, rowIndex: number, colIndex: number): Cells => {
  return produce(cells, (newCells) => {
    newCells[rowIndex][colIndex] = cells[rowIndex][colIndex] ? 0 : 1;
  });
};

export const runNextGeneration = (cells: Cells): Cells =>
  produce(cells, (newCells) => {
    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      for (let colIndex = 0; colIndex < COLS; colIndex++) {
        const liveNeighbourCount = countLiveNeighbours(rowIndex, colIndex, cells);
        if (cells[rowIndex][colIndex] === 1 && (liveNeighbourCount < 2 || liveNeighbourCount > 3)) {
          newCells[rowIndex][colIndex] = 0;
        } else if (cells[rowIndex][colIndex] === 0 && liveNeighbourCount === 3) {
          newCells[rowIndex][colIndex] = 1;
        }
      }
    }
  });
