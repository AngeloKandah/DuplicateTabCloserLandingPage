import NavbarItem from './NavbarItem.jsx';
import { v4 as uuidv4 } from 'uuid';

function Navbar({ routes }) {
  return (
    <div id='navbar-container' className='flex'>
      <ul
        id='desktop-navbar'
        className='hidden lg:bg-navGray lg:flex lg:items-center'
      >
        {routes.map(({ title }) => (
          <li key={uuidv4()}>
            <NavbarItem title={title} />
          </li>
        ))}
      </ul>
      <button
        id='mobile-navbar-button'
        className='bg-navGray absolute h-16 w-16 text-white w-28 hover:bg-navGray-hover lg:hidden'
        onClick={() =>
          document.getElementById('mobile-navbar').classList.toggle('hidden')
        }
      >
        Menu
      </button>
      <ul
        id='mobile-navbar'
        className='hidden bg-navGray absolute mt-16 lg:hidden'
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
