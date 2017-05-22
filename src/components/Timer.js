import React, { Component, PropTypes } from 'react';

class Timer extends Component {
  componentDidUpdate(){
    this.go();
  }

  go(){
    setTimeout(() => { if(this.props.permission) this.props.update(this.props.count) }, 1000);
  }

  render() {
    return (
      <div>
        {this.props.count}
      </div>
    );
  }
}

Timer.propTypes = {
  count: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  permission: PropTypes.bool.isRequired
}

export default Timer;
