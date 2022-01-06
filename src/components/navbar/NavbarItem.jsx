function NavbarItem({ title }) {
  return (
    <a
      className='text-sm block text-white text-center py-4 px-4 xl:text-lg md:text-base hover:bg-navGray-hover'
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavbarItem;
