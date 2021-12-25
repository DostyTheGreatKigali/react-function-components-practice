import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Family from './pages/Family';
import Gallery from './pages/Gallery';
import GiftRegistry from './pages/GiftRegistry';
import Guestbook from './pages/Guestboook';
import Story from './pages/Story';

function App() {
  const [text, setText] = useState('Sending this as prop to header component');
  const [count, setCount] = useState(0);
  const [lyrics, setLyrics] = useState([]);

  const displayText = () => {
    if(text === 'Sending this as prop to header component') {
      setText("We have set a new Text as Prop")
    } else {
      setText("Sending this as prop to header component")
    }
    // console.log("Displaying Text")
  }

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

//   const fetchLyrics = 

//   useEffect(() => {
   
// }, [])

useEffect(() => {
  const fetchData = async () => {
    // const response = await fetch(`https://swapi.dev/api/people`);
    const response = await fetch(`http://localhost:8000/api/home`);
    const newData = await response.json();
    console.log(newData);
  };

  fetchData();
});




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
        textAsProp={text} 
        displayTextAsProp={displayText}
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="about" element={
      <About 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="story" element={
      <Story 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="events" element={
      <Events 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="families" element={
      <Family 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="gallery" element={
      <Gallery 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="guestbook" element={
      <Guestbook 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="gift-registry" element={
      <GiftRegistry 
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />

     </Routes>

    </div>
    </Router>
  );
}

export default App;
