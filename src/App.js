import "./App.css";
import Carrossel from "./components/Carrossel/Carrossel";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <HeaderHero />
      <Carrossel />
    </div>
  );
}

export default App;
