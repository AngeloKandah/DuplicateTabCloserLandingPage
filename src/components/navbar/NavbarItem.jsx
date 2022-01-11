function NavbarItem({ title }) {
  return (
    <a
      className='block text-white text-center px-3 py-5 xl:py-navItem xl:text-lg md:text-base w-28 h-fit lg:w-auto hover:bg-navGray-hover'
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavbarItem;
