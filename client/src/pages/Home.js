import React, { useCallback, useEffect, useState } from 'react'
// import { MOVIES } from '../constants';
import Card from '../components/Card';
import { buyTicket, getMovies } from '../utils/movie';
import { login } from '../utils/near';



export default function Home()
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
    <div className="all_movies">
      {/* {
        account.accountId ? (
          movies.forEach(movie => console.log(movie))
        ): (
            <button onClick={login}>CONNECT WALLET</button>
        )
    } */}
      {
        account.accountId ? (
         
          movies.map(movie => <Card key={movie.id} {...movie}  />)
        ):((
          <button className='login_btn' onClick={login}>CONNECT WALLET</button>
      ))
        
      }

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


  // return (
  //   <div> <div >
  //   {
  //     MOVIES.map(movie => <Card key={movie.id} {...movie} />)
  //   }
  //   </div>
    
   
  //   </div>
  )
}
