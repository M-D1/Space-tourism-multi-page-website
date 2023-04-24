import { NavLink, Link ,Outlet } from "react-router-dom";
import logo from '../assets/shared/logo.svg'

import { useState } from "react";

export default function NavBar() {
  
  const [active , isActive] = useState(false)
  const navListStyle = {
    left: active && '30%', 
    
  }


  
  const handleClick = () => isActive(prevState => !prevState)
 
 return(
  <>
 
<header>
    <nav>
    
      <Link>
        <img src={logo} alt="" />
      </Link>
      <div onClick={handleClick} className={`bars ${active ? 'active':''}` }>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <ul className="nav--list" style={navListStyle}>

      <li className="nav--item">
        <NavLink to='.' className={`nav--link ${(isActive) => isActive ? 'active':null}`}>
          <span>00</span> Home
        </NavLink>
      </li>

      <li className="nav--item">
        <NavLink  to='destination'  className={`nav--link ${(isActive) => isActive ? 'active':null}`}>
        <span>01</span> Destination
        </NavLink>
      </li>

      <li className="nav--item">
        <NavLink  
        to='crew'    
        className={`nav--link ${(isActive) => isActive ? 'active':null}`}>
        <span>02</span> Crew
          
        </NavLink>
      </li>

      <li className="nav--item">
        <NavLink
          to='technology'
          className={`nav--link ${(isActive) => isActive ? 'active':null}`}
        >
        
        <span>03</span> Technology
        
        </NavLink>
      </li>

      </ul>
    </nav>
  </header>

   <Outlet />
  </>
 )
}