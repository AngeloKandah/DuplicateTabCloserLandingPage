import moveTabs from '../../images/MoveTabs.webp';

function MoveTabs() {
  return (
    <div id='Move Tabs' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Move Tabs</h1>
      <p className='py-3'>
        The MoveTabs option is simple, it will move the tab to position in front
        of the tab you attempted opening a new tab from. It will close the newly
        opened duplicate tab and move the already opened tab in front of the
        current tab you are on. This only works if the result of what you were
        going to do was open a new tab from a link, such as ctrl + clicking a
        link or middle mouse button clicking a link.
      </p>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={moveTabs}
          alt='Duplicate tab moving in front of tab.'
        />
        <figcaption className='text-center text-sm'>
          'MoveTabs' when enabled.
        </figcaption>
      </figure>
    </div>
  );
}

export default MoveTabs;
