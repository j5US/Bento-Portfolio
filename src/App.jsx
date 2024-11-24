import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Landing from './Landing';
// import Home from './Home';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import { createBrowserHistory } from 'history';

const App = () => {
  const [hasVisited, setHasVisited] = useState(false);
  const customHistory = createBrowserHistory();
  // Check if the user has already navigated away from the landing page
  // useEffect(() => {
  //   const visited = sessionStorage.getItem('hasVisited');
  //   if (visited === 'true') {
  //     setHasVisited(true);
  //   }
  // }, []);
  useEffect(() => {
    window.history.replaceState(null, '', window.location.href);
    // window.history.pushState(null, '', window.location.href);
    
  }, []);

  const handleNavigation = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setHasVisited(true);
  };

  return (
    <Router history={customHistory}>
      {/* <nav>
        <Link to="/" onClick={handleNavigation}>Home</Link> | <Link to="/about" onClick={handleNavigation}>About</Link>
      </nav> */}
      <Routes>
        <Route
          path="/"
          element={hasVisited ? <HomePage setRoute={handleNavigation}/> : <LandingPage setRoute={handleNavigation}/>}
          // element={<HomePage setRoute={handleNavigation}/>}
          // element={<Home/>}
        />
        <Route path="/about" element={<AboutPage setRoute={handleNavigation}/>} />
      </Routes>
    </Router>
  );
};

export default App;
