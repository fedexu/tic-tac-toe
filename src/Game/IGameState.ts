export interface IGameState {
    history: Array<Squares>;
    xIsNext: Boolean;
    stepNumber: number;
    winner: String| null;
}

interface Squares {
    squares: Array<String | null>
}
