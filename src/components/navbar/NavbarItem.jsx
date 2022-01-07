function NavbarItem({ title }) {
  return (
    <a
      className='block text-white text-center p-3 xl:text-lg md:text-base w-28 lg:w-24 xl:w-28 hover:bg-navGray-hover'
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavbarItem;
