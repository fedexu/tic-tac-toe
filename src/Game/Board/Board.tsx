
import { Square } from '../Square/Square';
import { selectCurrent } from '../GameSlice';
import { useSelector } from 'react-redux';
import './Board.scss';

export function Board() {

  const current = useSelector(selectCurrent);

  const renderedSquares = current.squares.map((square, idx) => {
    return <Square key={idx}
      value={square}
      id={idx}
    />
  })

  return (
    <div className='board'>
      <div className="board-row">
        {renderedSquares.slice(0, 3)}
      </div>
      <div className="board-row">
        {renderedSquares.slice(3, 6)}
      </div>
      <div className="board-row">
        {renderedSquares.slice(6, 9)}
      </div>
    </div>
  );
}

export default Board;
