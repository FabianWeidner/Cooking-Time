import { NavLink } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Time</h1>
        </NavLink>
        <NavLink to="/create">
          <p>Create Recipe</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
