function NavbarItem({ title, index, curPage, setActivePage }) {
  return (
    <button
      className={`link-button ${curPage === index ? 'selected' : ''}`}
      onClick={() => setActivePage(index)}
    >
      {title.name}
    </button>
  );
}

export default NavbarItem;
