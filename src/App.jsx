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

  // TODO: const with array of all challenges to send a list for the footer and maybe the AllChallenges components 
  
  return (
    <div className='flex flex-col min-h-screen justify-start'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/challenge" element={<Challenge />} />
        <Route exact path="/challenge/:challenge" element={<Challenge/>} />
        <Route exact path="/challenge/form" element={<Challenge/>} />
        <Route exact path="/challenge/qrcode" element={<Challenge/>} />
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
