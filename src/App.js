import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  const heading = 'COVID19 statestics';
  return (
    <div className="App">
      <Header heading={heading} />
      <HomePage />
    </div>
  );
}

export default App;
