function NavbarItem({ page, index, curPage, setActivePage }) {
  return (
    <button
      className={`block text-white text-center py-4 px-4 text-lg hover:bg-navGray-hover ${curPage === index ? 'bg-navGray-selected' : ''}`}
      onClick={() => setActivePage(index)}
    >
      {page.name}
    </button>
  );
}

export default NavbarItem;
