import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-opacity-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className='display-1'>Danny</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse ML navbar-collapse navUlPosition" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                <h1 className='display-6'>About Me</h1>
              </Link>
              <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                <h1 className='display-6'>Portfolio</h1>
              </Link>
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                <h1 className='display-6'>Contact</h1>
              </Link>
              <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                <h1 className='display-6'>Resume</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTabs;
