import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner</h1>
      <Menu name = {"Calamari"} price = {9} calories ={700}>
          <p>Description: Its fried squid with basil.</p>
          <p><em>Contains Wheat and Seafood</em></p>
      </Menu>
      <Menu name = {"Mac & Cheese"} price = {12} calories ={1500}>

      </Menu>
      <Menu name = {"Poke bowl"} price = {15} calories ={1000}>

      </Menu>
      <Menu name = {"Sushi"} price = {25} calories ={10}>

      </Menu>

    </div>
  );
}

export default App;
