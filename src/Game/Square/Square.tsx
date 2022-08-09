import { useAppDispatch } from '../../app/hooks';
import { handleClick } from '../GameSlice';
import { ISquareProps } from './ISquareProps';
import './Square.scss';

export function Square(props: ISquareProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="square-button"
      onClick={() => dispatch(handleClick(Number(props.id)))}>
      {props.value}
    </button >
  );

}

