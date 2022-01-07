import image from '../../images/500x250.png';

function Logs() {
  return (
    <div id='Logs' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Logs</h1>
      <p className='py-3'>
        The Duplicate Tab Closer does exactly what it says it does, closes
        duplicate tabs! With the duplicate tab closer it will prevent you from
        having duplicate tabs from existing at the same time, and will delete
        the newest tab opened to prevent any input loss in a previously opened
        tab. The way the Duplicate Tab Closer works is simply by comparing urls
        to see if they match, so it will not close any tabs from the same source
        if they are not exactly the same.
      </p>
    </div>
  );
}

export default Logs;
