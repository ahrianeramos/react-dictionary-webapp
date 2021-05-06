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
          <Dictionary defaultKeyword="yoga"/>
        </main>

        <footer className="App-footer">
         Open-source code by Ahriane 💻
        </footer>
      </div>
    </div>
  );
}

