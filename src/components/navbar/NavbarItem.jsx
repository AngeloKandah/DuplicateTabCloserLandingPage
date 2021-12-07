import { NavLink } from 'react-router-dom';

function NavbarItem({ title }) {
  return (
    <NavLink
      to={`/${title}`}
      className={({isActive}) => 
        'block text-white text-center py-4 px-4 text-lg hover:bg-navGray-hover' +
        (isActive ? ' bg-navGray-selected' : '')
      }
    >
      <button>{title}</button>
    </NavLink>
  );
}

/* {`block text-white text-center py-4 px-4 text-lg hover:bg-navGray-hover ${
  curPage === index ? 'bg-navGray-selected' : ''
}`} */

export default NavbarItem;
