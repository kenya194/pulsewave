import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Player from '../player/player';
import Trending from '../trending/trending';
import Feed from '../feed/feed';
import Library from '../library/library';



export default function Home() {
  return (
    <Router>
      <div className='main-body'>
        <Routes>
           <Route path='/' element = {<Library />} />
           <Route path='/favorites' element = {<Favorites />} />
           <Route path='/feed' element = {<Feed />} />
           <Route path='/player' element = {<Player />} />
           <Route path='/trending' element = {<Trending />} />
        </Routes>
        </div>   
    </Router>
  )
}
