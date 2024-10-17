import Marquee from 'react-fast-marquee';
import TestimonialCard from './TestimonialCard';

const TestimonialMarquee = () => {
  return (
    <Marquee direction='left' className='w-full h-full col-span-8 relative'>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Marquee>
  );
};
export default TestimonialMarquee;
