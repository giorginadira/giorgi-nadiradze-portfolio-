import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Header = () => {
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTypingEnd = () => {
    setIsTypingFinished(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1
            className={`text-3xl font-bold text-red-600 overflow-hidden whitespace-nowrap border-r-2 ${
              isTypingFinished ? "typing-finished" : "animate-typing"
            }`}
            onAnimationEnd={handleTypingEnd}
          >
            Giorgi Nadiradze
          </h1>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li className="relative group">
                <a href="#Home" className="text-black group-hover:text-red-600">
                  Home
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-400"></span>
              </li>
              <li className="relative group">
                <a href="#projects" className="text-black group-hover:text-red-600">
                  Projects
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-400"></span>
              </li>
              <li className="relative group">
                <a href="#about" className="text-black group-hover:text-red-600">
                  About
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-400"></span>
              </li>
              <li className="relative group">
                <a href="#contact" className="text-black group-hover:text-red-600">
                  Contact
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-400"></span>
              </li>
            </ul>
            <button className="md:hidden text-black" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {isMenuOpen && (
              <ul className="md:hidden">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
