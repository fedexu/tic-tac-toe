import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './App.module.scss';
import { Game } from './Game/Game'
import Home from "./Home/Home";

function App() {
  return (
    <div className={`${styles.App}`}>
        <Router >
            <Routes>
              <Route path="/" element={<Home />} >
              </Route>
              <Route path="/game" element={<Game />} >
              </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;