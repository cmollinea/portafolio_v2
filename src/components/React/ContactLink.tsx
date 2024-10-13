import { motion } from 'framer-motion';
import { config } from '../../constants/motionVariant';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function ContactLink({ href, children, className }: Props) {
  return (
    <motion.a
      target='_blank'
      href={href}
      {...config}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.05, ease: 'easeOut' }
      }}
      className={`border place-content-center bento-container group transition-colors hover:border-transparent overflow-hidden max-w-md p-2 w-full h-full flex items-center text-x; font-bold rounded-md relative bento-container ${
        className && className
      }`}
    >
      <span className='z-30 text-sm relative flex gap-2 text-neutral-500 group-hover:text-teal-500 transition-colors ease-in-out items-center'>
        {children}
      </span>{' '}
      <div className='absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 from-gray-200/20 to-transparent z-20 transition-opacity duration-200 ease-in-out backdrop-blur-[1px]'></div>
    </motion.a>
  );
}
export default ContactLink;
