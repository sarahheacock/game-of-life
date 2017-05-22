import * as CellActionTypes from '../actiontypes/cell';

export const cellChange = (index) => {
  return {
    type: CellActionTypes.CELL_CHANGE,
    index
  }
}

export const createGeneration = (count) => {
  return {
    type: CellActionTypes.GEN_CHANGE,
    count
  }
}

export const start = (permission) => {
  return {
    type: CellActionTypes.START,
    permission
  }
}

export const reset = (size) => {
  return {
    type: CellActionTypes.RESET,
    size
  }
}
