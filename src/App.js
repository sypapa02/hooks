import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <h1 className='Title'>AMADU-SYFLIX</h1>
      <MovieList className='List'/>
    </div>
  );
}

export default App;