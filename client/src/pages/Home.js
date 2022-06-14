import React from 'react'
import { MOVIES } from '../constants';
import Card from '../components/Card';

export default function Home() {
  return (
    <div> <div className="all_movies">
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
  )
}
