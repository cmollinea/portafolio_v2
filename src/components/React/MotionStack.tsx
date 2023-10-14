import { motion } from 'framer-motion';
import { config } from '../../constants/motionScale';
import Astro from '../icons/Astro';
import Css from '../icons/CSS';
import Git from '../icons/Git';
import HTML from '../icons/HTML';
import JavaScript from '../icons/JavaScript';
import Next from '../icons/Next';
import React from '../icons/React';
import TailwndCss from '../icons/TailwndCss';
import TypeScript from '../icons/TypeScript';

const stack = [
  <HTML />,
  <Css />,
  <JavaScript />,
  <TypeScript />,
  <React />,
  <TailwndCss />,
  <Next />,
  <Astro />,
  <Git />
];

function MotionStack() {
  return (
    <>
      {stack.map((tech, index) => (
        <motion.span
          key={index}
          {...config}
          transition={{ delay: 0.55 + index * 0.05 }}
          className='text-xs md:text-xl bg-neutral-300/10 backdrop-blur-sm border border-neutral-300/20 rounded-md p-1 md:p-2 flex items-center place-content-center'
        >
          {tech}
        </motion.span>
      ))}
    </>
  );
}
export default MotionStack;
