import { delay, motion } from 'framer-motion';
import { config } from '../../constants/motionVariant';

function MotionShortDescription() {
  return (
    <motion.p
      {...config}
      transition={{ delay: 0.9 }}
      className='text-md pb-8 my-4 text-lg md:text-2xl w-full max-w-prose mt-8'
    >
      Through dedication, perseverance, and a{' '}
      <b className='bg-gradient-to-tr from-red-500 via-red-500 to-orange-500 bg-clip-text text-transparent'>
        thirst for knowledge
      </b>
      , I am on a path of{' '}
      <b className='bg-gradient-to-tr from-red-500 via-red-500 to-orange-500 bg-clip-text text-transparent'>
        continuous improvement
      </b>
      , eager to make a{' '}
      <b className='bg-gradient-to-tr from-red-500 via-red-500 to-orange-500 bg-clip-text text-transparent'>
        meaningful impact
      </b>{' '}
      in the ever-evolving world of web development. 🚀💻
    </motion.p>
  );
}
export default MotionShortDescription;

// Absolutely! As a passionate web developer in training, I am deeply committed to continuous growth and learning. I firmly believe that the field of web development is constantly evolving, and embracing a mindset of perpetual learning is crucial for success. With each new project and challenge, I strive to expand my knowledge, refine my skills, and stay up-to-date with the latest technologies and best practices. I am fueled by the excitement of creating engaging and user-friendly web experiences, and I am dedicated to honing my craft to deliver high-quality solutions. Through dedication, perseverance, and a thirst for knowledge, I am on a path of continuous improvement, eager to make a meaningful impact in the ever-evolving world of web development.
