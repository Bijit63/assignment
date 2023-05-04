import React, { useEffect, useState } from 'react'
import Card from './Card';

const MovieList = () => {


    const [movieslist, setmovieslist] = useState([])

    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=7e5e27e6b51bcfd87532d3a63a2c2646"
      )
        .then((info) => {
          return info.json();
        })
        .then((data) => {setmovieslist(data.results) });
    }, [])


    
  return (
    <div>
        <div className='py-6  text-[25px] md:text-[40px] font-semibold text-center text-white '>LIST OF MOVIES</div>


    <div className='flex flex-wrap justify-center '>
    {movieslist.map((p)=>{ return <Card id={p.id} key={p.id} title={p.title} image={p.poster_path}  /> })}
    </div>






        





    </div>
  )
}

export default MovieList
