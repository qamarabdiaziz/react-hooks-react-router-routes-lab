import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{/*{code here}*/}</div>;
   <div className="navbar">
     {/*{code here}*/}
     <NavLink to="/">Home</NavLink>
     <NavLink to="/movies">Movies</NavLink>
     <NavLink to="/directors">Directors</NavLink>
     <NavLink to="/actors">Actors</NavLink>
   </div>;
}

export default NavBar;
