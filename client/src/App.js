import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { MOVIES } from './constants';
import Header from './components/Header';

//img, title, price,description, rating


function App() {
  return (
    <div>
      <Header/>
      <div className="all_movies">
      {
        MOVIES.map(movie => <Card key={movie.id} {...movie} />)
      }
      </div>
      
      <style jsx>{`
      .all_movies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
        justify-content: center;
        gap: 1rem;
      }
      `}</style>
    </div>
  );
}

export default App;
