function Footer() {
  return (
    <footer className='bg-navGray text-white text-center md:py-6 py-4'>
      <a
        className='sm:text-base text-sm underline hover:text-slate-400'
        href='https://github.com/AngeloKandah/DuplicateTabCloser'
      >
        DuplicateTabCloser GitHub
      </a>{' '}
      |{' '}
      <a
        className='md:text-base text-sm underline hover:text-slate-400'
        href='https://github.com/AngeloKandah/DuplicateTabCloserLandingPage'
      >
        This page's GitHub
      </a>
    </footer>
  );
}

export default Footer;
