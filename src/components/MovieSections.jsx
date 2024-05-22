import React from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from './MovieCard'
import { MovieData } from './MovieData'

export const MovieSections = ({secTitle}) => {
  return (
    <section className='frameDiv'>
      <div>
        <p>{secTitle} <Link className='' to="/">See all</Link></p>
      </div>
      <div className='sectionFlex'>
        {
          MovieData.map((movie, index)=>(
            <MovieCard 
              key={index}
              moviePoster={movie.moviePoster}
              movieName={movie.movieName}
              movieGenre={movie.movieGenre}
              platformLogo={movie.platformLogo}
              platformName={movie.platformName}     
            />
          ))
        }
      </div>
    </section>
  )
}

