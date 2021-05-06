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
          <a href="https://github.com/misspx12/react-dictionary-webapp" 
          target="_blank"
          rel="noreferrer">
          Open-source code</a> by <a href="https://dazzling-bartik-065b9b.netlify.app/"
          target="_blank"
          rel="noreferrer">Ahriane</a>
        </footer>
      </div>
    </div>
  );
}

