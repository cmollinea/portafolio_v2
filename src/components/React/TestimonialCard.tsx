import { BentoContainer } from './BentoContainer';

type Props = {
  name: string;
  ocupation: string;
  content: string;
};

const TestimonialCard = ({ name, ocupation, content }: Props) => {
  return (
    <BentoContainer className='flex flex-none w-[23.5rem] flex-col z-20 bento-container overflow-hidden  rounded-xl text-sm ml-2'>
      <div className='flex items-center gap-2'>
        <div>
          <img
            height='128'
            width='128'
            decoding='async'
            loading='lazy'
            className='h-16 w-16 flex-grow rounded-full border border-foreground/10'
            src={`https://api.dicebear.com/9.x/identicon/svg?seed=${name}`}
            alt=''
          />
        </div>
        <div>
          <h6 className='text-lg'>{name}</h6>
          <span className='font-light'>{ocupation}</span>
        </div>
      </div>
      <div className='mt-4'>
        <blockquote className='leading-relaxed'>{content}</blockquote>
      </div>
    </BentoContainer>
  );
};
export default TestimonialCard;
