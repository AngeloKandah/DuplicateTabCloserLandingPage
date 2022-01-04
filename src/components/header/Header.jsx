import { Navbar } from '../navbar';

function Header({ title, navbarRoutes }) {
  return (
    <header id='header' className='bg-navGray flex justify-left items-end sticky z-100 top-0 w-full'>
      <h1
        className={`justify-left text-5xl text-white py-6 px-6 bg-navGray 
          ${navbarRoutes ? '' : 'w-full'}`}
      >
        {title}
      </h1>
      {navbarRoutes ? <Navbar routes={navbarRoutes} /> : ''}
    </header>
  );
}

export default Header;
