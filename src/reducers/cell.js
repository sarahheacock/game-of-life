import * as CellActionTypes from '../actiontypes/cell'

function generator() {
  this.num = Math.round(Math.random() * 1);
}

const startSize = 20;
const startObj = [...new Array(startSize)].map((obj, row) => (
  [...new Array(startSize)].map((cell, column) => (
    {
      status: new generator().num === 1,
      index: row * startSize + column
    }
  ))
));

export default function Cell(state={cells:startObj, size:startSize, generation:0, permission:false}, action){
  switch(action.type) {
    case CellActionTypes.CELL_CHANGE: {
      const modify = state.cells.map((row) => {
        return row.map((cell) => {
          const result = {};
          result["status"] = cell["status"];
          result["index"] = cell["index"];
          if(cell["index"] === action.index) result["status"] = !(cell["status"]);
          return result;
        });
      });
      //console.log(state["cells"][1][3]["status"]);
      return {
        ...state,
        cells: [...modify]
      }
    }

    case CellActionTypes.START: {
      return {
        ...state,
        permission: !action.permission
      }
    }

    case CellActionTypes.RESET: {
      const newGen = [...new Array(action.size)].map((obj, row) => (
        [...new Array(action.size)].map((cell, column) => (
          {
            status: new generator().num === 1,
            index: row * 6 + column
          }
        ))
      ));
      return {
        ...state,
        permission: false,
        cells: [...newGen],
        generation: 0,
        size: action.size
      }
    }

    case CellActionTypes.GEN_CHANGE: {
      //const increase = action.count + 1;
      //const thisState = state["cells"];
      const update = state.cells.map((row) => {
        return row.map((cell) => {
          const result = {};
          result["status"] = cell["status"];
          result["index"] = cell["index"];

          const i = cell.index;
          const s = state.size;
          let possibleNeighbors = [];
          //left-bound
          // if(i%s === 0) possibleNeighbors = [i-s, i-s+1, i+1, i+s, i+s+1, i+s-1, i+(2*s)-1, i-1];
          // //right-bound
          // else if((i+1)%s === 0) possibleNeighbors = [i-s-1, i-s, i-1, i+s-1, i+s, i-s+1, i-(2*s)+1, i+1];
          if(i%s === 0) possibleNeighbors = [i-s, i-s+1, i+1, i+s, i+s+1];
          //right-bound
          else if((i+1)%s === 0) possibleNeighbors = [i-s-1, i-s, i-1, i+s-1, i+s];
          else possibleNeighbors = [i-s-1, i-s, i-s+1, i-1, i+1, i+s-1, i+s, i+s+1];

          let neighbors = 0;
          for(let j = 0; j < 8; j++){
            let n = possibleNeighbors[j];
            //avoid top and bottom
            while(n < 0 || n >= s*s){
              if(n >= s*s){
                n = n % (s);
              }
              else if(n < 0){
                n = Math.floor((n * -1) + (s*s));
              }
            }


            if(n >= 0 && n < s*s){
              const row = Math.floor(n / s);
              //console.log(row);
              const column = n % s;
              if(state["cells"][row][column]["status"] === true) neighbors++;
            }


          }

          if(cell["status"] === true){
            //fewer than two neighbors
            //greater than three neighbors
            if(neighbors < 2 || neighbors > 3) result["status"] = false;
          }
          else if(cell["status"] === false){
            //bring back to life
            if(neighbors === 3) result["status"] = true;
          }
          return result;
        });
      });

      return {
        ...state,
        cells: [...update],
        generation: action.count + 1
      }
    }

    default:
      return state;
  }
}
