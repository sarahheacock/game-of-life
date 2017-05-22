import React, {PropTypes} from 'react';

const StartButton = (props) => {
  return (
    <div>
      <button className="btn btn-info" onClick={() => props.start(props.permission)}>
        {(props.permission)? "pause" : "start"}
      </button>
      <button className="btn btn-danger" onClick={() => props.reset(props.size)}>
        reset
      </button>
    </div>
  );
};

StartButton.propTypes = {
  permission: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}

export default StartButton;
