import { Dialog, DialogActions, DialogContent } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addCredits, restart, selectCredit } from "../Game/GameSlice";
import styles from './Home.module.scss';

export function Home() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const goToGame = useCallback((credits: number) => {
        if (credits > 0)
            navigate('/game', { replace: true });
        if (credits <= 0)
            handleClickOpen();
    }, [navigate]);

    const credits = useAppSelector(selectCredit);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.menu}`}>
                <div className={`${styles.game_logo}`}>
                    <div className={`${styles.game_logo_text}`}><h1>Tic-Tac-Toe</h1></div>
                    <div className={`${styles.version}`}>Alpha Versions 0.0.1</div>
                </div>
                <div className={`${styles.menu_buttons}`}>
                    <div className={`${styles.play_button} ${styles.game_button}`}>
                        <button onClick={() => { goToGame(credits); dispatch(restart()); }}>Play</button>
                    </div>
                    <div className={`${styles.add_credit_button} ${styles.game_button}`} >
                        <button onClick={() => { dispatch(addCredits()) }}>Add Credit</button>
                    </div>
                    <a style={{ textDecoration: 'none' }} href="https://github.com/fedexu/tic-tac-toe" className={`${styles.about_button} ${styles.game_button}`}>
                        <button>
                            About
                        </button>
                    </a>
                    <div className={`${styles.Footer}`}>
                        <div className={`${styles.credit_number}`}>
                            Credits : {credits}
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogContent>
                    <div className={`${styles.alert_div}`}>
                        Add Credits!
                    </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} autoFocus>
                        Ok
                    </button>
                </DialogActions>
            </Dialog>

        </div>

    )
}

export default Home;