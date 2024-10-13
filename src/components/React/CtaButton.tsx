import content from '../../constants/content.json';

function CtaButton() {
  return (
    <>
      <a
        href='#social'
        className='p-2 border bg-neutral-300 text-black font-bold text-center rounded-md block mt-4'
      >
        {content.en.hero.ctaButtonLabel}
      </a>
    </>
  );
}
export default CtaButton;
