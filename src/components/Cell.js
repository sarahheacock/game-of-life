import React, {PropTypes} from 'react';
import '../index.css';

const Cell = (props) => {
  return (

      <button className="btn"
        style={{backgroundColor: (props.status) ? "black" : "white"}}
        onClick={() => {props.cellChange(props.index)}}
      >
      </button>

    );
}

Cell.propTypes = {
  status: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  cellChange: PropTypes.func.isRequired
}

export default Cell;
