import { useAppDispatch } from '../../app/hooks';
import { handleClick } from '../GameSlice';
import { ISquareProps } from './ISquareProps';

export function Square(props: ISquareProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="square"
      onClick={() => dispatch(handleClick(Number(props.id)))}>
      {props.value}
    </button >
  );

}

