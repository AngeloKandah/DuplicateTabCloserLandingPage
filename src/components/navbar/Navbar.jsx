import NavbarItem from './NavbarItem.jsx';

function Navbar({ pages, curPage, setActivePage }) {
  return (
    <ul className='bg-navGray flex justify-center sticky z-100 top-0'>
      {pages.map((page, index) => (
        <li key={index}>
          <NavbarItem
            page={page}
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
