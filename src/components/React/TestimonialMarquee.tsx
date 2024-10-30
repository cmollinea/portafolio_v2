import Marquee from 'react-fast-marquee';
import TestimonialCard from './TestimonialCard';
import { Testimonials } from '../../constants/testimonials';

const TestimonialMarquee = ({ lang = 'en' }: { lang?: 'es' | 'en' }) => {
  const testimonials = Testimonials.instance.getTestimonials(lang);

  return (
    <Marquee direction='left' className='w-full h-full col-span-8 relative'>
      {testimonials.map(({ name, ocupation, content }) => (
        <TestimonialCard
          key={name}
          name={name}
          ocupation={ocupation}
          content={content}
        />
      ))}
    </Marquee>
  );
};
export default TestimonialMarquee;
