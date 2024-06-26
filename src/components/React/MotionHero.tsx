import { motion } from 'framer-motion';
import { config } from '../../constants/motionVariant';

export const MotionHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      {...config}
      className='max-lg:pt-6 grid lg:grid-cols-6 2xl:grid-cols-12 pb-20 max-lg:gap-4 gap-2 justify-items-center place-content-center lg:mx-20 2xl:mx-10 max-lg:px-6 items-center min-h-screen overflow-hidden relative'
    >
      {children}
    </motion.section>
  );
};
