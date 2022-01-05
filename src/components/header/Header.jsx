import { Navbar } from '../navbar';

function Header({ title, navbarRoutes }) {
  return (
    <header
      id='header'
      className='bg-navGray flex justify-left sticky z-100 top-0'
    >
      <h1 className='bg-navGray xl:text-5xl md:text-3xl sm:text-2xl text-xl justify-left text-white py-6 px-6 self-end'>
        {title}
      </h1>
      {navbarRoutes ? <Navbar routes={navbarRoutes} /> : ''}
    </header>
  );
}

export default Header;
