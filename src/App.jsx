import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="appRoot">
      <div className="appBg" aria-hidden="true" />
      <Header />
      <main className="appMain">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
