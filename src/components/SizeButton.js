import React, {PropTypes} from 'react';

const SizeButton = (props) => {
  return (
    <div className="row">
      <button className="btn btn-link" onClick={() => props.reset(props.size - 1)}>
        -
      </button>
      {props.size}
      <button className="btn btn-link" onClick={() => props.reset(props.size + 1)}>
        +
      </button>
    </div>
  );
};

SizeButton.propTypes = {
  reset: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}

export default SizeButton;
