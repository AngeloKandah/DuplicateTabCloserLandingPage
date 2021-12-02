import { Navbar } from '../navbar';

function Header({ title, navbarContents }) {
  return (
    <header div id='header' className='flex items-stretch justify-start'>
      <h1
        className={`justify-left text-5xl text-white py-6 px-6 bg-navGray ${
          navbarContents ? '' : 'w-full'
        }`}
      >
        {title}
      </h1>
      {navbarContents ? (
        <Navbar
          pages={navbarContents.pages}
          curPage={navbarContents.curActivePage}
          setActivePage={navbarContents.setActivePage}
        />
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
