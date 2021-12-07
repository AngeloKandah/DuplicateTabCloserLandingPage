import NavbarItem from './NavbarItem.jsx';

function Navbar({ routes }) {
  return (
    <ul className='bg-navGray flex justify-left items-end sticky z-100 top-0 w-full'>
      {routes.map(({ title }, index) => (
        <li key={index}>
          <NavbarItem title={title} />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
