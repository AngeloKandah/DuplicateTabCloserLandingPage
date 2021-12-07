import { Navbar } from '../navbar';

function Header({ headerTitle, navbarRoutes }) {
  return (
    <header id='header' className='flex items-stretch justify-start'>
      <h1
        className={`justify-left text-5xl text-white py-6 px-6 bg-navGray ${
          navbarRoutes ? '' : 'w-full'
        }`}
      >
        {headerTitle}
      </h1>
      {navbarRoutes ? <Navbar routes={navbarRoutes} /> : <></>}
    </header>
  );
}

export default Header;
