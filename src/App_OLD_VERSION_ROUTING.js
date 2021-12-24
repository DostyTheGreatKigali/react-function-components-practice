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
         {/* <Route exact path='/' component={Header}  
         textAsProp={text} 
         displayTextAsProp={displayText}
         countAsProp={count}
         incrementAsProp={increment}
         decrementAsProp={decrement}
         />
         <Route path="/footer" component={Footer} 
         textAsProp={text} 
         displayTextAsProp={displayText}
         countAsProp={count}
         incrementAsProp={increment}
         decrementAsProp={decrement}
         /> */}
         <Route exact path="/" component={() => 
         <Header 
         textAsProp={text} 
         displayTextAsProp={displayText}
         countAsProp={count}
         incrementAsProp={increment}
         decrementAsProp={decrement}
          />
        } 
         /> 
         {/* <Route path="/sign-up" component={Register} />
         <Route path="/about" component={About} />
         <Route path="/competition/:id" component={Competition} />
         <Route path="/competitions" component={Competitions} />
         <Route path="/contact" component={Contact} />
         <Route path="/carousel" component={CarouselTest} />
         <Route path="/local-store" component={LocalStorage} />
         <Route path="/events/:event_id/contestants/:contestant_id" component={Contestant} /> */}
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
