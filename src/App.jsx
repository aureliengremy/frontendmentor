import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Challenge from './pages/Challenge';
import listOfChallenges from './Components/whichChallenge'

function App() {

  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change
 
  // TODO: const with array of all challenges to send a list for the footer and maybe the AllChallenges components 
  
  return (
    <div className='flex flex-col min-h-screen justify-start'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/challenge" element={<Challenge />} />
        <Route exact path="/challenge/:challenge" element={<Challenge/>} />
        {/* {listOfChallenges.map((challenge, index) => (
          <Route key={index} exact path={`/challenge/:${challenge}`} element={<Challenge/>} />
          ))} */}
        <Route path="/challenge/*" element={<Challenge />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
