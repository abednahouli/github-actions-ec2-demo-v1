import logo from "./logo.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const x = useMemo(() => Math.floor(Math.random() * 100 + 1), []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Herstopia!!</p>
        <p> user ID: ci-{x}-cd</p>
      </header>
    </div>
  );
}

export default App;
