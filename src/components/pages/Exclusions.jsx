import image from '../../images/500x250.png';

function Exclusions() {
  return (
    <div id='Exclusions' className='pb-4'>
      <h1 className='text-3xl font-semibold pt-3'>Exclusions</h1>
      <p className='py-3'>
        Exclusions for the Duplicate Tab Closer will ignore any urls that
        contain whatever one has inputted for an exclusion. The Exclusions also
        support regex, so if you would prefer the Duplicate Tab Closer to ignore
        all urls with a specific string, or based on a specific regex pattern,
        it will respect the user's input.
      </p>
      <figure className='py-3'>
        <img className='mx-auto' src={image} alt='Demonstrating exclusions.' />
        <figcaption className='text-center text-sm'>
          With and without Exclusions.
        </figcaption>
      </figure>
      <p className='py-3'>
        These exclusions work across all other options, including the Detect
        Windows and Detect TabGroups options, it will have the highest priority
        and will not close any tabs with the inputted exclusions.
      </p>
    </div>
  );
}

export default Exclusions;
