import Astro from '../icons/Astro';
import Css from '../icons/CSS';
import Git from '../icons/Git';
import HTML from '../icons/HTML';
import JavaScript from '../icons/JavaScript';
import Next from '../icons/Next';
import React from '../icons/React';
import TailwndCss from '../icons/TailwndCss';
import TypeScript from '../icons/TypeScript';

export const stack = [
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
    <div className='grid h-full grid-cols-6 p-4 gap-1 bento-container col-span-6 pt-10'>
      <h1 className='font-black col-span-6 text-6xl md:text-3xl 2xl:text-5xl bg-gradient-to-tr from-neutral-200 to-neutral-600 mb-4 bg-clip-text text-transparen'>
        Skills
      </h1>
      {stack.map((icon, index) => (
        <span
          key={index}
          className={`text-xs rounded-md md:text-xl bento-container backdrop-blur-sm p-2 h-full flex items-center place-content-center ${
            (index === 4 || index === 5 || index === 6) &&
            'col-span-2 row-span-2'
          }`}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}
export default MotionStack;
