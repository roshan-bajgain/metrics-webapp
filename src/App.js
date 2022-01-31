import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header heading={heading} />
      <HomePage />
    </div>
  );
}

export default App;
