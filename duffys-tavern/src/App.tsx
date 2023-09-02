import logo from "./duffystavern.jpg";
import "./App.css";
import Instagram from "./Instagram";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">
          <a href="https://goo.gl/maps/jLnksCffaiA2">Map</a>
        </p>
        <Instagram />
      </header>
    </div>
  );
}

export default App;
