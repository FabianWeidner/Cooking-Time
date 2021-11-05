import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './Navbar.scss';
import Searchbar from './Searchbar';

function Navbar() {
  const { color } = useTheme();
  console.log(color);
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Time</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">
          <p>Create Recipe</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
