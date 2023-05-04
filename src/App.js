
import './App.css';
import MovieList from './Components/MovieList';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import MovieInfo from './Components/MovieInfo';

function App() {
  return (
    <HashRouter>
        <Routes>
        <Route exact path="/" element={<MovieList/>}/>
        <Route exact path="/details/:id/:name" element={<MovieInfo/>}/>
        </Routes>
   
  
    </HashRouter>
  );
}

export default App;
