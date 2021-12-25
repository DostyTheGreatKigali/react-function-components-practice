import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Family from './pages/Family';
import Gallery from './pages/Gallery';
import GiftRegistry from './pages/GiftRegistry';
import Guestbook from './pages/Guestboook';
import Story from './pages/Story';

function App() {
  const [aboutData, setAboutData] = useState(null);
  // const [count, setCount] = useState(0);
  // const [lyrics, setLyrics] = useState([]);

  // BASIC useEffect
//   useEffect(() => {
   
// }, [])

useEffect(() => {
  // console.log('About Data')
  //   console.log(aboutData)
  const fetchAboutData = async () => {
    // const response = await fetch(`https://swapi.dev/api/people`);
    // const response = await fetch(`http://localhost:8000/api/lyrics`);
    const response = await fetch(`http://elitte.host/api/home`);
    const newData = await response.json();
    console.log('New About Data')
    console.log(newData);
    setAboutData(newData)
    // setAboutData({aboutData: newData})
    // console.log('About Data')
    // console.log(aboutData)
  };
  fetchAboutData();
}, []);
 



  return (
    <Router>
    <div className="App">
      {/* <h1 style={{ textAlign: 'center' }}>React Personal Practice</h1> */}
      <Nav />
      <Routes>
        {/* Passing props to elements */}
        {/* https://react-location.tanstack.com/guides/route-elements */}
      <Route path="/" element={
      <Home 
        // textAsProp={text} 
        
      /> 
      } />
      <Route path="about" element={
      <About 
        aboutDataAsProp={aboutData}
  
      />
      } />
      <Route path="story" element={
      <Story 
        //countAsProp={count}
  
      />
      } />
      <Route path="events" element={
      <Events 
        //countAsProp={count}
  
      />
      } />
      <Route path="families" element={
      <Family 
        //countAsProp={count}
  
      />
      } />
      <Route path="gallery" element={
      <Gallery 
        //countAsProp={count}
  
      />
      } />
      <Route path="guestbook" element={
      <Guestbook 
        //countAsProp={count}
  
      />
      } />
      <Route path="gift-registry" element={
      <GiftRegistry 
        //countAsProp={count}
  
      />
      } />

     </Routes>

    </div>
    </Router>
  );
}

export default App;
