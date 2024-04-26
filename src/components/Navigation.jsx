import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-opacity-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <a className="navbar-brand" href="#">Danny</a>
            </div>
            <div className="col d-flex justify-content-end">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse navUlPosition" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/"className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
              <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
              <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
}


export default NavTabs;
