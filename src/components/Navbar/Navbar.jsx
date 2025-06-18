import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { GiHamburgerMenu } from 'react-icons/gi';
import CloseIcon from '../../utils/Icons/CloseIcon';
import { Link } from 'react-scroll';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const scrollPosition = useScrollPosition();

  const headerStyle = {
    backgroundColor: scrollPosition > 0 ? 'rgba(0, 0, 0, 0.6)' : 'black',
    backdropFilter: scrollPosition > 0 ? 'blur(10px)' : 'none',
    boxShadow: scrollPosition > 0 ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.1)',
  };

  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 sm:px-10 py-2 flex justify-between items-center h-[78px] text-white`}
      style={headerStyle}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/" className="flex gap-2 items-center min-w-max">
          <img
            src={data.logo.url}
            alt={data.logo.alt}
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer mr-2"
          />
          <p className="text-md font-semibold hover:text-secondary text-[18px] w-max">
            {data.logo.text}
          </p>
        </a>
        <div className="hidden w-full sm:flex items-center justify-end gap-4 md:gap-8 xl:gap-16 px-4">
          {data['section-header'].links?.map((link, index) =>
            link.external ? (
              <a href={link.href} target="_blank" key={index}>
                <p className="text-white font-semibold hover:text-secondary cursor-pointer min-w-max">
                  {link.text}
                </p>
              </a>
            ) : (
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                spy={false}
                key={index}
              >
                <p className="text-white font-semibold hover:text-secondary cursor-pointer">
                  {link.text}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-white active:text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? (
          <CloseIcon color={'white'} className="active:stroke-secondary" />
        ) : (
          <GiHamburgerMenu />
        )}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
