import NavbarItem from './NavbarItem.jsx';
import { v4 as uuidv4 } from 'uuid';

//large is the smallest it can be, otherwise make it have the button dropdown.
function Navbar({ routes }) {
  return (
    <div className='flex'>
      <ul
        id='desktop-navbar'
        className='hidden lg:bg-navGray lg:flex lg:items-end'
      >
        {routes.map(({ title }, index) => (
          <li key={uuidv4()}>
            <NavbarItem title={title} />
          </li>
        ))}
      </ul>
      <button
        className='lg:hidden text-white px-5'
        onClick={() =>
          document.getElementById('mobile-navbar').classList.toggle('hidden')
        }
      >
        Options
      </button>
      <ul
        id='mobile-navbar'
        className='hidden absolute mt-10 bg-navGray flex flex-col'
      >
        {routes.map(({ title }, index) => (
          <li key={uuidv4()}>
            <NavbarItem title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
