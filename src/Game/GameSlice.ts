import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IGameState } from './IGameState';

const initialState: IGameState = {
  history: [{
    // squares:Array.from(Array(9).keys()).map(elem => { return elem + ''})
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: false,
  winner: null,
  credits: 0,
};

function calculateWinner(
  action: AnyAction
): action is PayloadAction<number> {
  return action.type === 'game/handleClick' || action.type === 'game/jumpTo';
}

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleClick(state: IGameState, action: PayloadAction<number>) {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      //caso base
      if (state.winner || squares[action.payload]) {
        return state;
      }
      squares[action.payload] = state.xIsNext ? 'X' : 'O';
      state.history = history.concat([{ squares: squares }]);
      state.stepNumber = history.length;
      state.xIsNext = !state.xIsNext;
      return state;
    },
    jumpTo(state: IGameState, action: PayloadAction<number>) {
      state.stepNumber = action.payload;
      state.xIsNext = (action.payload % 2) === 0;
    },
    addCredits(state:IGameState){
      state.credits += 1;
    },
    restart(state: IGameState){
      state.history = initialState.history;
      state.stepNumber = initialState.stepNumber;
      state.xIsNext = initialState.xIsNext;
      state.winner = initialState.winner;
      state.credits = initialState.credits;
    },
  },
  extraReducers: (builder) => {
      builder.addMatcher(calculateWinner, (state: IGameState) => {
          const history = state.history.slice(0, state.stepNumber + 1);
          const current = history[history.length - 1];
          const squares = current.squares.slice();
          const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              state.winner = squares[a]
              state.credits -= 1;
              return state;
            }
          }
          state.winner = null;
          return state;
        })
    },
});

export const { handleClick, jumpTo , restart} = GameSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStepNumber = (state: RootState) => state.game.stepNumber;
export const selectXIsNexet = (state: RootState) => state.game.xIsNext;
export const selectHistory = (state: RootState) => state.game.history;
export const selectCurrent = (state: RootState) => state.game.history[state.game.stepNumber];
export const selectWinner = (state: RootState) => state.game.winner;


export default GameSlice.reducer;
