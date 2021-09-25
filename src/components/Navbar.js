import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const ref = useRef();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (navOpen && ref.current && !ref.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navOpen]);

  return (
    <header>
      <div className="w-full text-gray-700 bg-white shadow-md">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            {/* ="/details" 
        ="/reviews"
        ="/shop"
        ="/upcomingEvents"  */}
            <Link to="/">
              <div className="inline-flex text-base rounded-lg cursor-pointer">
                <img
                  src="https://i.postimg.cc/Z5hVcxP4/IMG-20210904-WA0015.jpg"
                  alt="Dk adventure logo"
                  className="object-contain h-12 w-full"
                />
              </div>
            </Link>

            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <nav
            className={
              "flex-col flex-grow md:pb-0 md:flex md:justify-end md:flex-row" +
              (navOpen ? " block" : " hidden")
            }
          >
            <Link to="/" className="text-black no-underline">
              <div className="ml-2 inline-flex px-2 py-2 text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                Home
              </div>
            </Link>

            <div className="relative">
              <Link to="/upcomingEvents" className="text-black no-underline">
                <div className="ml-2 inline-flex px-2 py-2 text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                  Upcoming Events
                </div>
              </Link>
            </div>

            <div className="relative">
              {/* <Link to="/"> */}
              <div className="ml-2 inline-flex px-2 py-2 text-black text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                Contact
              </div>
              {/* </Link> */}
            </div>

            <div className="relative">
              <Link to="/shop" className="text-black no-underline">
                <div className="ml-2 inline-flex px-2 py-2 text-base rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer">
                  Shop
                </div>
              </Link>
            </div>

            <div className="relative">
              <Link to="/upcomingEvents" className="no-underline">
                <button className="bg-transparent ml-2 inline-flex px-2 py-2 hover:bg-red-500 text-red-500 text-base font-semibold hover:text-red-300 border border-red-500 hover:border-transparent rounded-full">
                  Book Now
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
