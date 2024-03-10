
import './App.css';
import WordCarousel from './components/WordCarousel';
import words from "./data/words";

function App() {
  return (
    <div className="App">
      <WordCarousel words={words} />
    </div>
  );
}

export default App;
