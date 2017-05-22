import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CellActionCreators from '../actions/cell';
import CellRow from '../components/CellRow';
import Timer from '../components/Timer';
import StartButton from '../components/StartButton';
import SizeButton from '../components/SizeButton';

class Board extends Component {
  static propTypes = {
    cells: PropTypes.array.isRequired,
    size: PropTypes.number.isRequired,
    generation: PropTypes.number.isRequired,
    permission: PropTypes.bool.isRequired
  }
  render() {
    const{ dispatch, cells, size, generation, permission } = this.props;
    const cellChange = bindActionCreators(CellActionCreators.cellChange, dispatch);
    const createGeneration = bindActionCreators(CellActionCreators.createGeneration, dispatch);
    const start = bindActionCreators(CellActionCreators.start, dispatch);
    const reset = bindActionCreators(CellActionCreators.reset, dispatch);

    //console.log(cells);
    const cellArray = cells.map((cell, index) => (
      <CellRow
        row={cell}
        cellChange={cellChange}
      />
    ));

    return (
      <div className="App container">
        <h1 className="head">Game of Life</h1>
        <SizeButton
          size={size}
          reset={reset}
        />

        <div className="well">{cellArray}</div>
        <Timer
          count={generation}
          update={createGeneration}
          permission={permission}
        />
        <StartButton
          permission={permission}
          size={size}
          start={start}
          reset={reset}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    cells: state.cells,
    size: state.size,
    generation: state.generation,
    permission: state.permission
  }
);

export default connect(mapStateToProps)(Board);
