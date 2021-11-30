import image from '../../images/500x250.png';

function Home() {
  return (
    <div id='homePage'>
      <div className='grid grid-cols-2 pb-10'>
        <p className='pr-10'>
          The Duplicate Tab Closer does exactly what it says it does, closes
          duplicate tabs! With the duplicate tab closer it will prevent you from
          having duplicate tabs from existing at the same time, and will delete
          the newest tab opened to prevent any input loss in a previously opened
          tab. The way the Duplicate Tab Closer works is simply by comparing
          urls to see if they match, so it will not close any tabs from the same
          source if they are not exactly the same.
        </p>
        <img className='mx-auto' src={image} alt='Duplicate Tab Closer In Action' />
      </div>
      <div className='grid grid-cols-2 pb-10'>
        <img className='mx-auto' src={image} alt='Duplicate Tab Closer In Action' />
        <p className='pl-10'>
          The main purpose of this extension is to make your tabs less
          cluttered, too many tabs makes it impractical to navigate and will
          inevitably lead you to having duplicate tabs from an already previous
          search. Having this extension will clean out clutter, while also being
          adjustable to what you want with the varying options that exist.
        </p>
      </div>
      <p className='text-4xl text-center pb-4'>Options</p>
      <p className=''>
        There are many options for the Duplicate Tab Closer that allow it to be
        more user driven. The tabs are as follows:{' '}
        <b>MoveTabs, Effect Windows, Effect TabGroups, and Exclusions.</b> The
        logs are to quickly know which tab was recently deleted to go back to it
        if wanted. More detail about each of these options will be done in their
        respective page located on the navbar.
      </p>
    </div>
  );
}

export default Home;