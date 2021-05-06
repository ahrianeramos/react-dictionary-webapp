import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
          your dictionary
          </h1>
        </header>

        <main>
          <Dictionary defaultKeyword="magic"/>
        </main>

        <footer>
         <a href="#">Open-source code</a> by <a href="#">Ahriane</a>
        </footer>
      </div>
    </div>
  );
}

