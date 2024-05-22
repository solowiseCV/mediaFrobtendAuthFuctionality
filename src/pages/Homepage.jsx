import React from 'react'
import './Pages.css'
import { Navigations } from '../components/Navigations'
import { Toggle } from '../components/Toggle'
import { MovieSections } from '../components/MovieSections'


export const Homepage = () => {
  return (
    <main className='homePageMain'>
      <Navigations 
        Home='Home'
        Dashboard='Dashboard' 
        Services='Services'
        showButtons = {false}         
      />
      <Toggle />
      <div>
        <MovieSections secTitle="Recommendations"/>
        <MovieSections secTitle="Continue Watching"/>
        <MovieSections secTitle="My Watch List"/>
      </div>
    </main>
  )
}
