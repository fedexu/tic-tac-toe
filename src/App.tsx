import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import { Game } from './Game/Game'
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} >
            </Route>
            <Route path="/game" element={<Game />} >
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
