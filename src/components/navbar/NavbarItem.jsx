function NavbarItem({ title }) {
  return (
    <a
      href={`#${title}`}
      className='block text-white text-center px-3 py-5 xl:py-navItem xl:text-lg md:text-base w-28 h-fit lg:w-auto hover:bg-navGray-hover'
    >
      {title}
    </a>
  );
}

export default NavbarItem;
