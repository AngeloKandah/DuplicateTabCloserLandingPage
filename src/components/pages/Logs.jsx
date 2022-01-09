import image from '../../images/500x250.png';

function Logs() {
  return (
    <div id='Logs' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Logs</h1>
      <p className='py-3'>
        The logs page is simply to see what tab the Duplicate Tab Closer
        recently closed. If you would like to reopen the tab you can click the
        link, however, if there is still a duplicate tab of that link open, it
        will immediately close.
      </p>
    </div>
  );
}

export default Logs;
