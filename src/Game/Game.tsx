import { Board } from './Board/Board';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { jumpTo, selectHistory, selectWinner, selectXIsNexet } from './GameSlice';

export function Game() {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistory);
  const winner = useAppSelector(selectWinner);
  const xIsNexet = useAppSelector(selectXIsNexet)

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => dispatch(jumpTo(move))}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNexet ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
