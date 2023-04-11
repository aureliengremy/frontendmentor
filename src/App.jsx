import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Challenge from './pages/Challenge';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
 
  // TODO: const with array of all challenges to send a list for the footer and maybe the AllChallenges components 

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/challenge" element={<Challenge />} />
      </Routes>
    </>
  )
}

export default App
