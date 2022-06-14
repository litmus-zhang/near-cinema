import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import React, { useCallback, useEffect, useState } from 'react';
import { getMovies, createMovie, buyTicket } from './utils/movie';
import {login} from './utils/near';

//img, title, price,description, rating


function App()
{
  const account = window.walletConnection.account()
  const [movies, setMovies] = useState([]);
  const fetchMovies = useCallback(async () =>
  { 
    if (account.accountId)
    {
      setMovies(await getMovies());
    }
  });

  useEffect(() =>
  {
    fetchMovies();
  }, []);
  return (
    <>
      {
        account.accountId ? (
          movies.forEach(movie => console.log(movie))
        ): (
            <button onClick={login}>CONNECT WALLET</button>
        )
    }
    </>
    // <Router>
    //     <Header />
    //     <Routes>
    //     <Route exact path="/admin" element={<Admin />} /> 
    //     <Route exact path="/" element={<Home />} /> 
    //     </Routes>
    //   </Router>
  );
}

export default App;
