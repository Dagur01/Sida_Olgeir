import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <Link to="/">
        <h1>Rútína</h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
