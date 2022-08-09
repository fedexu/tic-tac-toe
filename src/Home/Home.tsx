import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { restart } from "../Game/GameSlice";

export function Home() {
    const dispatch = useAppDispatch();

    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item mobile={12} desktop={12} >
                    <div onClick={() => { dispatch(restart()) }}>
                        <Link to="/game">Game</Link>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;