import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { restart } from "../Game/GameSlice";

export function Home() {
    const dispatch = useAppDispatch();
    return (
        <div className="home">Hello from home
        
        <nav>
            <ul>
                <li onClick={() => { dispatch(restart()) }}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => { dispatch(restart()) }}>
                    <Link to="/game">Game</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Home;