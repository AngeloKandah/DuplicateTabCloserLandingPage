function NavbarItem({ title }) {
  return (
    <a
      className='block text-white text-center py-4 px-4 text-lg hover:bg-navGray-hover'
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavbarItem;
