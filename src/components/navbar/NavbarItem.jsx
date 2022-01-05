function NavbarItem({ title }) {
  return (
    <a
      className='block text-white text-center py-4 px-4 xl:text-lg md:text-base sm:text-sm text-sm hover:bg-navGray-hover'
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavbarItem;
