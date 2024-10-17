import Marquee from 'react-fast-marquee';
import { myProjects } from '../../constants';
import ProjectCard from './ProjectCard';

export const WorkMarquee = () => {
  return (
    <Marquee pauseOnHover className='w-full col-span-8'>
      {myProjects.map((project, index) => (
        <ProjectCard
          className='ml-4'
          index={index % 2 === 0 ? 0 : 1}
          title={project.title}
          link={{
            live: project.live,
            github: project.github
          }}
          image={project.image}
          stackIndex={project.stackIndex}
        >
          {project.description}
        </ProjectCard>
      ))}
    </Marquee>
  );
};
