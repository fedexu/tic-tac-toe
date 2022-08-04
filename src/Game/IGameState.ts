export interface IGameState {
    history: Array<Squares>;
    xIsNext: Boolean;
    stepNumber: number;
}

interface Squares {
    squares: Array<String | null>
}
