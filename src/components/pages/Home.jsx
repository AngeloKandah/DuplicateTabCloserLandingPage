import DTC from '../../images/DTC_In_Action.webp';

function Home() {
  return (
    <div id='Home' className='pb-4'>
      <h1
        id='title'
        className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center py-5 mx-title font-mono'
      >
        Duplicate Tab Closer
      </h1>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={DTC}
          alt='Duplicate Tab Closer In Action'
        />
        <figcaption className='text-center text-sm'>
          The extension in action.
        </figcaption>
      </figure>
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
        <b>MoveTabs, Effect Windows, Effect TabGroups, Exclusions, and Logs.</b>{' '}
        More detail about each of these options will be discussed below or by
        using the navbar.
      </p>
    </div>
  );
}

//Built on github
//Desktop Icon left side, title of project front and center, keep menu items on left side
//Mobile Icon center, dropdown left side, github right side

export default Home;
