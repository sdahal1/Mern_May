import logo from './logo.svg';
import './App.css';
// import Coins from './components/Coins';
import CoinsWithAxios from './components/CoinsWithAxios';

function App() {
  return (
    <div className="App">
		<h1>Crypto api. Check your prices here.</h1>
		{/* <Coins></Coins> */}
    <CoinsWithAxios></CoinsWithAxios>
    </div>
  );
}

export default App;
