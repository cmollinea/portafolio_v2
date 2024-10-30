import { AnimatePresence, motion } from 'framer-motion';
import { config } from '../../constants/motionProject';
import Code from '../icons/Code';
import External from '../icons/External';
import { stack } from '../../constants';
import type { ImageMetadata } from 'astro';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  title: string;
  link: {
    live: string;
    github: string;
  };
  image: ImageMetadata;
  index: number;
  children: React.ReactNode;
  stackIndex: number[];
  className?: string;
};

let extendedConfig = config;
extendedConfig.variants.initial.y = 1;

function ProjectCard({
  image,
  title,
  link,
  index,
  children,
  stackIndex,
  className
}: Props) {
  const [showInfo, setShowInfo] = useState(false);
  const body = document.body;

  useEffect(() => {
    if (showInfo) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showInfo]);

  return (
    <div
      className={`shadow-lg  shadow-neutral-200/5 backdrop-blur-sm  rounded-lg group relative overflow-hidden ${
        className && className
      }`}
    >
      <div className='relative h-64 w-full overflow-hidden'>
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          className='relative rounded-t-lg h-full w-full  transition-all ease-in-out'
        />
      </div>

      <div className='absolute bottom-0 left-0 right-0 top-0  z-10 backdrop-blur-[1px] flex items-center place-content-center bg-black/50 transition-all ease-in-out opacity-0 group-hover:opacity-100'>
        <button
          onClick={() => setShowInfo(true)}
          className='text-xl font-bold bg-neutral-300 text-black px-6 py-3 rounded-md text-center '
        >
          Details
        </button>
      </div>

      {showInfo &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed z-50 bg-background/10 inset-0 backdrop-blur-lg'
            >
              <button onClick={() => setShowInfo(false)}>Close</button>
            </motion.div>
          </AnimatePresence>,
          body
        )}
    </div>
  );
}
export default ProjectCard;

//  {/* <div className='p-6 relative text-lg'>
//       <a
//         href={link.live}
//         rel='noopener nofollow'
//         target='_blank'
//         className='text-2xl md:text-4xl font-bold text-primary flex items-center py-0.5 hover:underline'
//       >
//         {title} <External />
//       </a>
//       <div className='flex items-center my-2 gap-1'>
//         {stackIndex.map((item) => (
//           <div
//             className='text-xs md:text-xl bg-neutral-300/10 backdrop-blur-sm border border-neutral-300/20 rounded-md p-1 md:p-2 flex items-center place-content-center'
//             key={Math.random()}
//           >
//             {stack[item]}
//           </div>
//         ))}
//       </div>
//       <p className='text-sm md:text-base pt-2'>{children}</p>
//       <a
//         href={link.github}
//         className='text-lg font-bold text-primary hover:underline flex items-center mt-2'
//       >
//         <Code />
//         Code
//       </a>
//     </div> */}
