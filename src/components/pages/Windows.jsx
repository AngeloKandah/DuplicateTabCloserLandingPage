import winOn from '../../images/Windows_On.webp';

function Windows() {
  return (
    <div id='Windows' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Windows</h1>
      <p className='py-3'>
        The detect duplicates between windows options does exactly that, will
        make sure you do not have duplicate tabs open across multiple windows.
        If this is not toggled on, you can have duplicate tabs on new windows,
        however, if a duplicate tab is opened within the window, the extension
        will still function as intended.
      </p>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={winOn}
          alt='Portraying when Detect Duplicates Between Windows is On'
        />
        <figcaption className='text-center text-sm'>
          'Detect Windows' when enabled.
        </figcaption>
      </figure>
    </div>
  );
}

export default Windows;
