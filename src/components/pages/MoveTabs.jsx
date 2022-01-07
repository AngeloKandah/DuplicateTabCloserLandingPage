import image from '../../images/500x250.png';

function MoveTabs() {
  return (
    <div id='MoveTabs' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>MoveTabs</h1>
      <p className='py-3'>
        The MoveTabs option is simple, it will move the tab to position in front
        of the tab you attempted opening a new tab from. It will close the newly
        opened duplicate tab and move the already opened tab in front of the
        current tab you are on.
      </p>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={image}
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
