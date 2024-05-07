import content from '../../content/content.json';

function Heading() {
  return (
    <>
      <h1 className='font-black text-6xl md:text-7xl 2xl:text-8xl bg-gradient-to-tr from-neutral-200 to-neutral-600 bg-clip-text text-transparent'>
        {content.en.hero.heading}
      </h1>
      <small className='text-lg md:text-xl max-w-prose my-4'>
        {content.en.hero.small}
      </small>
    </>
  );
}
export default Heading;
