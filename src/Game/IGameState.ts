export interface IGameState {
    history: Array<Squares>;
    xIsNext: Boolean;
    stepNumber: number;
    winner: String| null;
    credits: number;
}

interface Squares {
    squares: Array<String | null>
}
