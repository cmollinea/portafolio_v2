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
      , I am on a journey of{' '}
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
