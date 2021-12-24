import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [text, setText] = useState('Sending this as prop to header component');
  const [count, setCount] = useState(0);
  // const [text, showText] = useState('');

  // const displayText = () => {
  //   setText("We have set a new Text as Prop")
  //   // console.log("Displaying Text")
  // }

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


  return (
    <Router>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 style={{ textAlign: 'center' }}>React Personal Practice</h1>
      <Nav />
      <Routes>
        {/* Passing props to elements */}
        {/* https://react-location.tanstack.com/guides/route-elements */}
      <Route path="/" element={
      <Header 
        textAsProp={text} 
        displayTextAsProp={displayText}
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />
      <Route path="/footer" element={
      <Footer 
        // textAsProp={text} 
        // displayTextAsProp={displayText}
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}  
      />
      } />

     </Routes>
{/* 
      <Header 
        textAsProp={text} 
        displayTextAsProp={displayText}
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}
      
      />

      <Footer 
        textAsProp={text} 
        displayTextAsProp={displayText}
        countAsProp={count}
        incrementAsProp={increment}
        decrementAsProp={decrement}
      
      /> */}
    </div>
    </Router>
  );
}

export default App;
