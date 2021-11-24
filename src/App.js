import logo from "./logo.svg";
import "./App.css";
import DrfApiFetch from "./components/DrfApiFetch";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <DrfApiFetch />
      </div>
    </div>
  );
}

export default App;
