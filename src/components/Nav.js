import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Nav() {
       const [isNavCollapsed, setIsNavCollapsed] = useState(true)


   const handleNavCollapse = () => {
       setIsNavCollapsed(!isNavCollapsed)
     }

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
             <Link to="footer" className="nav-link" style={{cursor: 'pointer'}}>About</Link>
           </li>
           {/* <li className="nav-item">
             <Link to="/contact" className="nav-link" style={{cursor: 'pointer'}}>Contact us</Link>
           </li>
           <li className="nav-item">
             <Link to="/sign-up" className="nav-link" href="#"><button>Sign up</button></Link>
           </li>
           <li className="nav-item">
             <Link to="/sign-in" className="nav-link" href="#"><button>Sign in</button></Link>
           </li> */}
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