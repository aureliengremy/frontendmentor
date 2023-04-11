// import Service01 from '../images/service-01.jpg';
import { Link } from "react-router-dom";
import Form from "../Components/InteractiveRating/Form";
import Challenge from '../pages/Challenge'

function AllChallenges() {

  // TODO: make componet for every Card > Link

  return (
    <section className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">
                Voici la liste des Challenges réalisés :
              </h2>
            </div>

            
          
            {/* Grid */}
            <div className="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:max-w-none items-start">
              {/* Item #1 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  {/* <Challenge name="form">
                  <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src="https://placehold.co/404x256"
                      width="202"
                      height="128"
                      alt="Item 01"
                    />
                  </Challenge> */}
                  <Link className="block group overflow-hidden" to='/challenge' state="form">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src="https://placehold.co/404x256"
                      width="202"
                      height="128"
                      alt="Item 01"
                    />
                  </Link>
                </div>
                <div className="grow text-center">
                <Link  to='/challenge' state="form"
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    
                  >
                    System Design
                  </Link>
                </div>
              </div>
              {/* Item #2 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                <Link className="block group overflow-hidden" to='/challenge' state="qrcode">
                    <img
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src="https://placehold.co/404x256"
                      width="202"
                      height="128"
                      alt="Item 02"
                    />
                  </Link>
                </div>
                <div className="grow text-center">
                <Link  to='/challenge' state="qrcode"
                    className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out"
                    
                  >
                    Remote Team
                  </Link>
                </div>
              </div>
              
            </div>

            {/* Bottom gradient */}
            {/* <div className="flex justify-center items-center absolute bottom-0 w-full h-48 bg-gradient-to-t from-gray-900 pointer-events-none">
              <div>
                <a className="btn inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 group pointer-events-auto" href="#0">
                  See All Services
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
                      <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllChallenges;
