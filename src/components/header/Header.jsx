import { Navbar } from '../navbar';

function Header({ title, navbarRoutes }) {
  return (
    <header id='header' className='bg-navGray flex justify-between lg:justify-start sticky z-100 top-0'>
      <h1
        className='bg-navGray xl:text-5xl lg:text-4xl md:text-3xl 
                     sm:text-2xl text-xl text-white md:p-6 p-3'
      >
        {title}
      </h1>
      {navbarRoutes ? <Navbar routes={navbarRoutes} /> : ''}
    </header>
  );
}

export default Header;
