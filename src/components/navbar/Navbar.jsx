import NavbarItem from './NavbarItem.jsx';

function Navbar({ routes }) {
  return (
    <ul className='bg-navGray flex justify-left items-end'>
      {routes.map(({ title }, index) => (
        <li key={index}>
          <NavbarItem title={title} />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
