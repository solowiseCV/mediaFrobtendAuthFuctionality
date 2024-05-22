import React from 'react'
import './MovieCard.css'

export const MovieCard = ({ moviePoster, movieName, movieGenre, platformLogo, platformName }) => {

  return (
    <section className="movieCard">
      <section className='moviePoster'>
        <img src={moviePoster} alt={movieName} />
      </section>
      <section className="movieDetails">
        <h1>{movieName}</h1>
        <footer>
          <span className='movieGenre'>{movieGenre}</span>
          <img src={platformLogo} alt={`${platformName}'s logo`} />
        </footer>
      </section>
    </section>
  )
}
