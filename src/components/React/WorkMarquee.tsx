import Marquee from 'react-fast-marquee';
import { myProjects } from '../../constants';
import ProjectCard from './ProjectCard';
import External from '../icons/External';
import Code from '../icons/Code';
import { stack } from '../../constants';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export const WorkMarquee = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [infoIndex, setInfoIndex] = useState<null | number>(0);
  const [body, setBody] = useState<undefined | HTMLElement>();

  useEffect(() => {
    setBody(document.body);
  }, []);

  console.log(infoIndex);

  useEffect(() => {
    if (body) {
      showInfo
        ? (body.style.overflow = 'hidden')
        : (body.style.overflow = 'auto');
    }
  }, [showInfo]);

  const handleShowProject = useCallback((index: number) => {
    setInfoIndex(index);
    setShowInfo(true);
  }, []);

  const handleCloseProject = useCallback(() => {
    setShowInfo(false);
    setInfoIndex(null);
  }, []);

  const info = typeof infoIndex === 'number' ? myProjects[infoIndex] : null;

  return (
    <>
      <Marquee
        play={!showInfo}
        pauseOnHover
        className='w-full h-full col-span-8'
      >
        {myProjects.map((project, index) => {
          return (
            <ProjectCard
              handleShowProject={handleShowProject}
              image={project.image}
              key={project.title}
              className='ml-4'
              index={index}
            />
          );
        })}
      </Marquee>

      {body &&
        createPortal(
          <AnimatePresence>
            {showInfo && info && (
              <motion.div
                key={info.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.15 } }}
                className='fixed z-50 bg-background/10 flex items-center place-content-center inset-0 backdrop-blur-xl p-6'
              >
                <motion.div
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{
                    opacity: 0,
                    translateY: 50,
                    transition: { delay: 0, duration: 0.1 }
                  }}
                  transition={{ ease: 'backInOut', delay: 0.1 }}
                  className='relative text-lg flex flex-col md:flex-row bg-background xl:max-w-7xl lg:max-w-5xl md:space-x-6 max-md:space-y-6 p-10 rounded-xl'
                >
                  <div className='relative h-full w-full md:max-w-xs xl:max-w-sm  overflow-hidden shrink-0'>
                    <motion.img
                      src={info.image.src}
                      width={info.image.width}
                      height={info.image.height}
                      className='relative rounded-xl h-full w-full  transition-all ease-in-out'
                    />
                  </div>
                  <div>
                    <a
                      href={info.live}
                      rel='noopener nofollow'
                      target='_blank'
                      className='text-2xl md:text-4xl font-bold text-primary flex items-center py-0.5 hover:underline w-fit'
                    >
                      {info.title} <External />
                    </a>
                    <div className='flex items-center my-2 gap-1'>
                      {info.stackIndex.map((item, index) => {
                        const icon = stack[item].component;
                        return (
                          <div
                            className='text-xs md:text-xl bg-neutral-300/10 backdrop-blur-sm border border-neutral-300/20 rounded-md p-1 md:p-2 flex items-center place-content-center'
                            key={index}
                          >
                            {icon({ className: 'h-4' })}
                          </div>
                        );
                      })}
                    </div>
                    <p className='text-sm md:text-base pt-2'>
                      {info.description}
                    </p>
                    <a
                      href={info.github}
                      className='text-lg font-bold text-primary hover:underline w-fit flex items-center mt-2'
                    >
                      <Code />
                      Code
                    </a>
                  </div>
                  <button
                    className='rounded-full absolute font-bold text-xs  h-8 w-8 -top-2 -right-2 bg-card'
                    onClick={handleCloseProject}
                  >
                    X
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          body
        )}
    </>
  );
};
