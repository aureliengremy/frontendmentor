import { Link } from 'react-router-dom';

import Illustration from '../assets/images/footer-illustration.svg';
import SocialFooter from './SocialFooter';
// import {listOfChallenges} from '../Components/whichChallenge'

function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img className="max-w-none" src={Illustration} width="2336" height="421" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 pt-8 border-t border-blue-500">
          
          {/* <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            
            <Link className="block group" to="/" aria-label="Cruip">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-blue-100 group-hover:fill-white transform duration-150 ease-in-out"
                  d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"
                />
                <path
                  className="fill-sky-400 group-hover:fill-sky-300 transform duration-150 ease-in-out"
                  d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"
                />
              </svg>
            </Link>
          </div>

          
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Challenges</h6>
            <ul className="text-sm space-y-2">
              {listOfChallenges.map((challenge, index) => ( 
                <li>
                  <Link className="text-blue-300 hover:text-white transition duration-150 ease-in-out" to={`/challenge/${challenge}`}>
                    {`Challenge ${challenge}`}
                  </Link>
                </li>
              ))}

              OR 
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Challenge#2
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Challenge#3
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Challenge#4
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Challenge#5
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <SocialFooter/>
      </div>
    </footer>
  );
}

export default Footer;
