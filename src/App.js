import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>      

      <ItemListContainer greeting = "Mundo Mundial" description = "Camisetas de fútbol Qatar 2022" />

    </div>
  );
}

export default App;
