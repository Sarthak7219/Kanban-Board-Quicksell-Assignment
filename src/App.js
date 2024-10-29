import "./App.css";
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="outer_cont">
        <div className="container">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
