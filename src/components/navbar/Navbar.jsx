import NavbarItem from './NavbarItem.jsx';

function Navbar({ titles, curPage, setActivePage }) {
  return (
    <ul className='nav'>
      {titles.map((title, index) => (
        <li key={index}>
          <NavbarItem
            title={title}
            index={index}
            curPage={curPage}
            setActivePage={setActivePage}
          />
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
