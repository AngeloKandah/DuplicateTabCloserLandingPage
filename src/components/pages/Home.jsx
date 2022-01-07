import image from '../../images/500x250.png';

function Home() {
  return (
    <div id='Home' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Home</h1>
      <p className='py-3'>
        The Duplicate Tab Closer does exactly what it says it does, closes
        duplicate tabs! With the Duplicate Tab Closer it will prevent you from
        having duplicate tabs from existing at the same time, and will close the
        newest tab opened to prevent any input loss in an already opened tab.
        The way the Duplicate Tab Closer works is simply by comparing urls to
        see if they match, so it will not close any tabs from the same source if
        they are not exactly the same. The Duplicate Tab Closer will also always
        focus the tab that was detected as a duplicate.
      </p>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={image}
          alt='Duplicate Tab Closer In Action'
        />
        <figcaption className='text-center text-sm'>
          The extension in action.
        </figcaption>
      </figure>

      <p className='py-3'>
        The main purpose of this extension is to make your tabs less cluttered,
        too many tabs makes it impractical to navigate and will inevitably lead
        you to having duplicate tabs from an already previous search. Having
        this extension will clean out clutter, while also being adjustable to
        what you want with the varying options that exist.
      </p>
      <p className='text-2xl'>Options</p>
      <p className='py-3'>
        There are many options for the Duplicate Tab Closer that allow it to be
        more user driven. The options are as follows:{' '}
        <b>MoveTabs, Effect Windows, Effect TabGroups, and Exclusions.</b> The
        logs are to quickly know which tab was recently deleted to go back to it
        if wanted. More detail about each of these options will be done in their
        respective page located on the navbar.
      </p>
    </div>
  );
}

export default Home;
