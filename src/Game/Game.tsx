import { Board } from './Board/Board';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { jumpTo, restart, selectHistory, selectWinner, selectXIsNexet } from './GameSlice';
import './Game.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function Game() {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistory);
  const winner = useAppSelector(selectWinner);
  const xIsNexet = useAppSelector(selectXIsNexet)

  const navigate = useNavigate();
  const goToHome = useCallback(() => {
    navigate('/', { replace: true })
  }, [navigate]);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button className="history-button" onClick={() => dispatch(jumpTo(move))}>{desc}</button>
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
    <div className='game'>
      <div onClick={() => { dispatch(restart()) }}>
        <button onClick={goToHome}>Home</button>
      </div>

      <Board />
      <div className="miagrid">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>

    </div>
  );
}

export default Game;
