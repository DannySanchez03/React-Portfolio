import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg dsNav">
        <div className="container-fluid">
          <Link className="navbar-brand dsBrand" to="/">
            <span className="dsBrandMark" aria-hidden="true" />
            <span className="dsBrandText">Danny Sanchez</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navUlPosition" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className={currentPage === '/' ? 'nav-link active dsNavLink' : 'nav-link dsNavLink'}>
                About
              </Link>
              <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active dsNavLink' : 'nav-link dsNavLink'}>
                Work
              </Link>
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active dsNavLink' : 'nav-link dsNavLink'}>
                Contact
              </Link>
              <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active dsNavLink' : 'nav-link dsNavLink'}>
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTabs;
