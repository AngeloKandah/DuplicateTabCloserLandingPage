import NavbarItem from './NavbarItem.jsx';
import { v4 as uuidv4 } from 'uuid';

function Navbar({ routes }) {
  return (
    <div id='navbar-container' className='flex'>
      <ul
        id='desktop-navbar'
        className='hidden lg:bg-navGray lg:flex lg:items-end'
      >
        {routes.map(({ title }) => (
          <li key={uuidv4()}>
            <NavbarItem title={title} />
          </li>
        ))}
      </ul>
      <button
        className='bg-navGray lg:hidden text-white w-28 hover:bg-navGray-hover'
        onClick={() =>
          document.getElementById('mobile-navbar').classList.toggle('hidden')
        }
      >
        Menu
      </button>
      <ul
        id='mobile-navbar'
        className='hidden bg-navGray absolute md:mt-19 sm:mt-18 mt-17 lg:hidden'
      >
        {routes.map(({ title }) => (
          <li key={uuidv4()}>
            <NavbarItem title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
