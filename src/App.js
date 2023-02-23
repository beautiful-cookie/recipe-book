import './App.css'; 
import Header from './components/Header/Header';
import Search from './components/Search/Search'; 

function App() {
  return (
    <div className="App">
      <div className='recipes-page-wrapper'>
        <Header /> 
        <Search /> 
      </div>
    </div>
  );
}

export default App;
