import React, {PropTypes} from 'react';
import Cell from './Cell.js';

const CellRow = (props) => {
  const cellRow = props.row.map((cell, index) => (
    <Cell
      key={index}
      status={cell.status}
      index={cell.index}
      cellChange={props.cellChange}
    />
  ));

  return (
    <div>
      {cellRow}
    </div>
  );
}

CellRow.propTypes = {
  row: PropTypes.array.isRequired,
  cellChange: PropTypes.func.isRequired
};

export default CellRow;
