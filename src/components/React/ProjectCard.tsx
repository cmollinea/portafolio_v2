import type { ImageMetadata } from 'astro';

type Props = {
  handleShowProject: (index: number) => void;
  index: number;
  className?: string;
  image: ImageMetadata;
};

function ProjectCard({ image, className, handleShowProject, index }: Props) {
  return (
    <button
      onClick={() => handleShowProject(index)}
      className={`shadow-lg  shadow-neutral-200/5 backdrop-blur-sm  rounded-lg group active:scale-95 transition-all relative overflow-hidden ${
        className && className
      }`}
    >
      <div className='relative h-64 w-full overflow-hidden'>
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          className='relative rounded-t-lg h-full w-full  transition-all grayscale group-hover:grayscale-0 ease-in-out'
        />
      </div>

      <div className='absolute bottom-0 left-0 right-0 top-0  z-10 backdrop-blur-[1px] flex items-center place-content-center bg-black/50 transition-all ease-in-out opacity-0 group-hover:opacity-100'></div>
    </button>
  );
}
export default ProjectCard;
