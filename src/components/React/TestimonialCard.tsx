import { BentoContainer } from './BentoContainer';

const TestimonialCard = () => {
  return (
    <BentoContainer className='flex flex-none w-[23.5rem] flex-col z-20 bento-container overflow-hidden text-neutral-100 rounded-xl text-sm ml-2'>
      <div className='flex items-center gap-2'>
        <div>
          <img
            height='128'
            width='128'
            decoding='async'
            loading='lazy'
            className='h-16 w-16 flex-grow rounded-full border border-foreground/10'
            src='https://randomuser.me/api/portraits/men/45.jpg'
            alt=''
          />
        </div>
        <div>
          <h6 className='text-lg'>John Smith</h6>
          <span className='font-light'>Engineer at BuildTech</span>
        </div>
      </div>
      <div className='mt-4'>
        <blockquote className='leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          impedit tempora voluptatibus autem ut voluptatum ullam minus
          cupiditate dolorem voluptates excepturi totam, vel officia veniam
          reiciendis accusamus, iure repellendus iste. explicabo?
        </blockquote>
      </div>
    </BentoContainer>
  );
};
export default TestimonialCard;
