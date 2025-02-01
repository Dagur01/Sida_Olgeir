import { Link } from 'react-router-dom';
import './main_body.css';


function Main_body() {

  return (
    <>
      <div className="main">
        <div className="button_container">
            <Link to="/morgun">
            <button type="button">
              <a href="">Morgunrútína</a>
            </button>
            </Link>
            <Link to="/kvold">
            <button>
              <a href="">Kvöldrútína</a>
            </button>
            </Link>
        </div>
      </div>
    </>

    
  );
}

export default Main_body;
