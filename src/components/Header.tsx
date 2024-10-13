import  { useState } from 'react'
import GithubLogo from '../assets/icon/github.png'
import LinkedinLogo from '../assets/icon/linkedin.png'
import Container from './Container'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-white fixed top-0 left-0 right-0 shadow-sm z-10'>
      <Container>
        <nav className='py-6 flex flex-row justify-between items-center'>
          <h1 className='text-primary-500 font-semibold text-lg '>
            DAO TUAN SON
          </h1>

          {/* Hamburger Menu Button */}
          <button
            className='flex flex-col gap-1 sm:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-1 bg-grayNoob transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-1 bg-grayNoob transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-1 bg-grayNoob transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Menu (hidden in mobile) */}
          <ul className='hidden sm:flex flex-row gap-10'>
            <li className='text-lg text-gray-800'>
              About
            </li>
            <li className='text-lg text-gray-800'>
              Resume
            </li>
            <li className='text-lg text-gray-800'>
              Contact
            </li>
          </ul>

          {/* Social links (hidden in mobile) */}
          <div className='hidden sm:flex flex-row gap-3'>
            <a href="">
              <img src={GithubLogo} alt="GitHub" />
            </a>
            <a href="">
              <img src={LinkedinLogo} alt="LinkedIn" />
            </a>
          </div>

          {/* Modal for Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 w-3/4 rounded-lg relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>

                {/* Mobile Menu */}
                <ul className='flex flex-col gap-4 items-center'>
                  <li className='text-lg text-gray-800'>
                    About
                  </li>
                  <li className='text-lg text-gray-800'>
                    Resume
                  </li>
                  <li className='text-lg text-gray-800'>
                    Contact
                  </li>
                </ul>

                {/* Social links in mobile modal */}
                <div className='flex flex-row gap-3 justify-center mt-4'>
                  <a href="">
                    <img src={GithubLogo} alt="GitHub" />
                  </a>
                  <a href="">
                    <img src={LinkedinLogo} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </Container>

    </div>

  )
}

export default Header