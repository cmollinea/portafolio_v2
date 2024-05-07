import content from '../../content/content.json';

function CtaButton() {
  return (
    <>
      <a
        href='#social'
        className='p-2 border border-neutral-300/80  hover:text-black hover:bg-amber-500 hover:border-amber-500 rounded-lg transition-colors ease-in-out font-bold text-2xl font-mono text-center max-w-md'
      >
        {content.en.hero.ctaButtonLabel}
      </a>
    </>
  );
}
export default CtaButton;
