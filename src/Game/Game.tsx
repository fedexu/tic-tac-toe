import { Board } from './Board/Board';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { jumpTo, restart, selectHistory, selectWinner, selectXIsNexet } from './GameSlice';
import styles from './Game.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { InputLabel, NativeSelect } from '@mui/material';

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
    return (
      <option key={move} value={move}>{move}</option>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNexet ? 'X' : 'O');
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.home_button}`}>
        <button onClick={() => { dispatch(restart()); goToHome() }}>Home</button>
      </div>
      <div className={`${styles.game_area}`}>
        <div className={`${styles.game_grid_area}`}>
          <div className={`${styles.game_grid}`}>
            <div className={`${styles.game_grid_item}`}>
              <Board />
            </div>
          </div>
        </div>
        <div className={`${styles.info_area}`}>
          <div className={`${styles.history}`}>
            <InputLabel sx={{ font: "1rem 'Ndot-55'", color: 'black' }} variant="standard" htmlFor="uncontrolled-native">
              Go to move:
            </InputLabel>
            <NativeSelect
              sx={{ font: "1rem 'Ndot-55'", color: 'black' }}
              defaultValue={0}
              onChange={(event) => { dispatch(jumpTo(Number(event.target.value))) }}>
              {moves}
            </NativeSelect>
          </div>
          <div className={`${styles.next_player}`}>
            {status}
          </div>
        </div>
      </div>
      <div className={`${styles.next_player_desktop}`}>
        {status}
      </div>
    </div>
  );
}

export default Game;
