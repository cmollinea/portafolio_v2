import { motion } from 'framer-motion';
import { config } from '../../constants/motionProject';

type Props = {
  title: string;
  link: {
    live: string;
    github: string;
  };
  image: string;
  index: number;
  children: React.ReactNode;
};

function ProjectCard({ image, title, link, index, children }: Props) {
  return (
    <motion.div
      {...config}
      transition={{ delay: index * 0.05 }}
      className='shadow-lg shadow-neutral-200/5 backdrop-blur-sm rounded-lg border border-neutral-200/10 hover:border-neutral-200/30 transition-colors max-w-[350px] md:max-w-xl group relative overflow-hidden'
    >
      <div className='relative overflow-hidden'>
        <img
          src={image}
          width={1200}
          height={900}
          className='relative rounded-t-lg object-cover h-full max-h-80'
        />
      </div>
      <div className='p-6 relative text-lg'>
        <h3 className='text-2xl font-bold bg-gradient-to-tr from-red-500 via-red-500 to-orange-500 bg-clip-text text-transparent'>
          {title}
        </h3>
        <p className='text-sm md:text-base pt-2'>{children}</p>
        <div className='grid grid-cols-2 w-fit'>
          <a
            href={link.live}
            className='text-lg font-bold text-red-500 hover:underline'
          >
            Live
          </a>
          <a
            href={link.github}
            className='text-lg font-bold text-red-500 hover:underline'
          >
            Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
