import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addCredits, restart, selectCredit } from "../Game/GameSlice";
import './Home.scss'

export function Home() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const goToGame = useCallback((credits: number) => {
        if (credits > 0)
            navigate('/game', { replace: true })
    }, [navigate]);

    const credits = useAppSelector(selectCredit);

    return (
        <div className="container">
            <div className="menu">
                <div className="game-logo">
                    <div className="game-logo-text"><h1>Tic-Tac-Toe</h1></div>
                    <div className="version">Alpha Versions</div>
                </div>
                <div className="menu-buttons">
                    <div className="play-button game-button" >
                        <button onClick={() => { goToGame(credits); dispatch(restart());  }}>Game</button>
                    </div>
                    <div className="add-credit-button game-button" >
                        <button onClick={() => { dispatch(addCredits()) }}>Add Credit</button>
                    </div>
                    <a style={{ textDecoration: 'none' }} href="https://github.com/fedexu/tic-tac-toe" className="about-button game-button">
                        <button>
                            About
                        </button>
                    </a>
                    <div className="Footer">
                        <div className="credit-number">
                            Credits : {credits}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;