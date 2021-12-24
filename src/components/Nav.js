import { Link } from 'react-router-dom'

function Nav() {
    return (
      <div>
  
       <ul>
       <li className="nav-item">
              <Link to="/" className="nav-link" style={{cursor: 'pointer'}}>Header <span className="sr-only">(current)</span></Link>
       </li>
       <li className="nav-item">
              <Link to="/footer" className="nav-link" style={{cursor: 'pointer'}}>Footer <span className="sr-only">(current)</span></Link>
       </li>
       </ul>

      </div>
    );
  }
  
  
  
  export default Nav;