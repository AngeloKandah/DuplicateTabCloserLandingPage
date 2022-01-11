import { Navbar } from '../navbar';
import logo from '../../images/logo.png';
import GithubCorner from 'react-github-corner';

function Header({ navbarRoutes }) {
  return (
    <header
      id='header'
      className='bg-navGray flex lg:justify-start sticky z-10 top-0'
    >
      <img
        src={logo}
        alt='icon'
        className='hidden lg:flex lg:w-12 lg:h-12 lg:m-2'
      ></img>
      {navbarRoutes ? <Navbar routes={navbarRoutes} /> : ''}
      <img
        src={logo}
        alt='icon'
        className='lg:hidden w-12 h-12 m-2 flex mx-auto'
      ></img>
      <GithubCorner
        href='https://github.com/AngeloKandah/DuplicateTabCloserLandingPage'
        svgStyle={{height: 64, width: 64}}
      />
    </header>
  );
}

export default Header;
