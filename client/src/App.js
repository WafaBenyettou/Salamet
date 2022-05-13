import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Register from './routes/Register';
import LogIn from './routes/LogIn.js';
import Home from './routes/Home'
import Report from './routes/Report'
import GuideMe from './routes/GuideMe';
import Settings from './routes/Settings/Settings';
import Blog from './routes/Blog/index';
import BlogHome from './routes/Home/index'
import Map from './routes/Map/Map'
import Chart from "./components/chart/chart"
import MyMap from "./components/MyMap"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/GuideMe' element={<GuideMe />} />

        <Route path='/Register' element={<Register />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Settings' element={<Settings />} />

        <Route path='/MyMap' element={<MyMap />} />

        <Route path='/Chart' element={<Chart/>} />
        <Route path='/Blog/:id' element={<Blog/>} />
        <Route path='/BlogHome' element={<BlogHome/>} />
      </Routes>
    </>
  );
}

export default App;
