import content from '../../constants/content.json';

function Heading() {
  return (
    <div className='col-span-6 bento-container h-fit py-10'>
      <h1 className='font-black text-6xl md:text-3xl 2xl:text-5xl bg-gradient-to-tr from-neutral-200 to-neutral-600 bg-clip-text text-transparen'>
        {content.en.hero.heading}
      </h1>
      <small className='text-lg md:text-xl max-w-prose my-4'>
        {content.en.hero.small}
      </small>
    </div>
  );
}
export default Heading;
