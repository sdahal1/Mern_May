import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';
//props is a way to send custom data down to a component
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Dojo Diner</h1>
      <Menu name={"Calamari"} price={9} calories={500}>
          <p>Description: Its fried squid with basil.</p>
          <p><em>Contains Wheat and Seafood</em></p>
      </Menu>
      <Menu name={"Mac and Cheese"} price={12} calories={1500}>
          <p>Description: Cheesy pasta basically.</p>
          <p><em>Contains Wheat and Dairy</em></p>
      </Menu>
      <Menu name={"Poke bowl"} price={15} calories={800}>
          <p>Description: Its bunch of raw fish in a bowl.</p>
          <p><em>Contains Seafood</em></p>
      </Menu>
      <Menu name={"Sushi"} price={20} calories={5}>
          <p>Description: For the elites only.</p>
          <p><em>Contains Seafood and Soy</em></p>
      </Menu>

    </div>
  );
}

export default App;
