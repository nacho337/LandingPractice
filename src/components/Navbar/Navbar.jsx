import { useState, useEffect } from 'react';
import data from '../../data.json';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    const mailtoLink = `mailto:call@nexusfood.com?subject=Contact`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`max-w-full bg-white fixed top-0 w-full h-min-content ${
        isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'
      }`}
      style={{
        zIndex: 99999,
        transition: 'background-color 0.3s',
      }}
    >
      <header>
        <nav className="flex justify-between px-6 xl:px-12 py-2 sm:p-3 items-center w-full">
          <a href="/">
            <div className="flex items-center pr-4 sm:hidden md:flex max-h-16 hover:animate-pulse min-w-max">
              <img
                width={150}
                src={data['section-header'].logo}
                alt={data['section-header'].alt}
                className="sm:ml-4 xl:ml-0"
              />
            </div>
            <div className="hidden sm:flex md:hidden items-center gap-3 max-h-16 hover:animate-pulse min-w-max">
              <img
                height={80}
                width={80}
                src={data['section-header'].logo2}
                alt={data['section-header'].alt2}
                className="sm:ml-4 xl:ml-0"
              />
            </div>
          </a>
          <ul className="items-center sm:text-xs break2:text-base justify-around hidden sm:flex sm:-ml-5 md:gap-0 lg:gap-3 xl:gap-6 2xl:gap-12">
            {data['section-header'].navbar.map((item, index) => (
              <li
                key={index}
                className="min-w-max-content whitespace-nowrap ml-6"
              >
                <Link
                  to={item.toLowerCase().replace(/\s+/g, '')}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-bold text-gray_default hover:text-primary active:text-primary cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center text-[12px] break2:text-[1rem] hidden sm:flex -space-x-4 sm:pl-8 xl:space-x-6 min-w-max-content px-4">
            <a
              href={data.blog.url}
              target="_blank"
              className="font-bold text-gray_default hover:text-primary active:text-primary"
            >
              {data['section-header'].blog}
            </a>
            <button
              onClick={handleContactClick}
              className="sm:bg-transparent text-gray_default hover:text-primary active:text-primary py-2 px-6 md:py-3 md:px-9 cursor-pointer whitespace-nowrap button-class"
            >
              <p className="font-bold ">{data['section-header'].contact}</p>
            </button>
          </div>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <div className="relative w-1/2">
                <HiX
                  onClick={handleMenuOpen}
                  className="text-primary w-8 h-8 cursor-pointer"
                />
                <div className="absolute z-40 right-0 bg-gray_light bg-opacity-90 w-[160px] text-center px-6 rounded-sm shadow-xl">
                  <ul className="">
                    {data['section-header'].navbar.map((item, index) => (
                      <li
                        key={index}
                        className="min-w-max-content whitespace-nowrap my-4"
                      >
                        <Link
                          to={item.toLowerCase().replace(/\s+/g, '')}
                          spy={false}
                          smooth={true}
                          duration={1000}
                          offset={-80}
                          className="font-bold text-white text-[14px] hover:text-primary active:text-gray_dark"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                    <div className="flex flex-col gap-4">
                      <a
                        href={data.blog.url}
                        target="_blank"
                        className="font-bold text-white text-[14px] hover:text-primary active:text-gray_dark"
                      >
                        {data['section-header'].blog}
                      </a>
                      <a
                        className="font-bold text-white text-[14px] pb-4 hover:text-primary active:text-gray_dark"
                        onClick={handleContactClick}
                      >
                        {data['section-header'].contact}
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <HiMenu
                onClick={handleMenuOpen}
                className="text-primary w-8 h-8 cursor-pointer"
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;