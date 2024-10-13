import content from '../../content/content.json';

function ShortDescription() {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: content.en.hero.shortDescription }}
      className='text-md pb-8 my-4 text-lg md:text-2xl w-full max-w-prose mt-8'
    ></p>
  );
}
export default ShortDescription;
