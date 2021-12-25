import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Nav() {
       const [isNavCollapsed, setIsNavCollapsed] = useState(true)


   const handleNavCollapse = () => {
       setIsNavCollapsed(!isNavCollapsed)
     }

    //  TODO
    // Add active class to nav items
    // https://rdomanoel.medium.com/how-to-create-an-active-classname-navbar-using-react-and-react-router-70d890c9b58e

    return (
       // <nav className="navbar navbar-expand-lg navbar-light nav-real">
       <nav className="navbar navbar-expand-lg bg-light nav-real">
       <a href="/" className="navbar-brand" style={{cursor: 'pointer'}}>My App</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" 
       data-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent" 
       // aria-expanded="false" 
       aria-expanded={!isNavCollapsed ? true : false}
       aria-label="Toggle navigation"
       onClick={handleNavCollapse}
       >
         <span className="navbar-toggler-icon"></span>
       </button>
     
       <div 
       // className="collapse navbar-collapse"
       className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
       id="navbarSupportedContent"
       >
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <Link to="/" className="nav-link" style={{cursor: 'pointer'}}>Home <span className="sr-only">(current)</span></Link>
           </li>
           <li className="nav-item">
             <Link to="about" className="nav-link" style={{cursor: 'pointer'}}>About</Link>
           </li>
           <li className="nav-item">
             <Link to="story" className="nav-link" style={{cursor: 'pointer'}}>Story</Link>
           </li>
           <li className="nav-item">
             <Link to="events" className="nav-link" href="#">Events</Link>
           </li>
           <li className="nav-item">
             <Link to="families" className="nav-link" href="#">Families</Link>
           </li>
           <li className="nav-item">
             <Link to="gallery" className="nav-link" style={{cursor: 'pointer'}}>Gallery</Link>
           </li>
           <li className="nav-item">
             <Link to="guestbook" className="nav-link" href="#">Guestbook</Link>
           </li>
           <li className="nav-item">
             <Link to="gift-registry" className="nav-link" href="#">Gift Registry</Link>
           </li>
         </ul>
         {/* <!-- <form className="form-inline my-2 my-lg-0">
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form> --> */}
       </div>
     </nav>
    );
  }
  
  
  
  export default Nav;