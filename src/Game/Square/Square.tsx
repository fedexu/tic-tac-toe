import { useAppDispatch } from '../../app/hooks';
import { calculateWinner, handleClick } from '../GameSlice';
import { ISquareProps } from './ISquareProps';

export function Square(props: ISquareProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="square"
      onClick={() => {
        dispatch(handleClick(Number(props.id)));
        dispatch(calculateWinner());
      }}>
      {props.value}
    </button>
  );

}

