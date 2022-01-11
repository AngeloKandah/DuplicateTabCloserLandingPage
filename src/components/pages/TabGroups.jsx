import tabOn from '../../images/TabGroups_On.webp';
import tabOff from '../../images/TabGroups_Off.webp';

function TabGroups() {
  return (
    <div id='TabGroups' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>TabGroups</h1>
      <p className='py-3'>
        The detect duplicates between tabgroups will detect any duplicates
        whether in a tabgroup or not. It functions slightly different from
        detect duplicates between windows by always detect within a tabgroup
        whether enabled or disabled. This means that no duplicate can exist
        within a single tabgroup when enabled or disabled, however when enabled,
        no duplicate can exist across any/all tabgroups or the window.
      </p>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={tabOn}
          alt='Portraying when Detect Duplicates Between TabGroups is On'
        />
        <figcaption className='text-center text-sm'>
          'Detect TabGroups' when enabled.
        </figcaption>
      </figure>
      <figure className='py-3'>
        <img
          className='mx-auto'
          src={tabOff}
          alt='Portraying Detect Duplicates Between TabGroups is Off'
        />
        <figcaption className='text-center text-sm'>
          'Detect TabGroups' when disabled.
        </figcaption>
      </figure>
    </div>
  );
}

export default TabGroups;
