import { stack } from '../../constants';
import { AnimatedContainer } from './AnimatedContainer';
import { BentoContainer } from './BentoContainer';

function MotionStack() {
  return (
    <AnimatedContainer
      key={'Skills Container'}
      className='grid h-full bg-card border-border grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 p-4 gap-1 bento-container col-span-6 pt-10'
    >
      <h1 className='font-black col-span-2 sm:col-span-5 lg:col-span-6 text-2xl w-full md:text-3xl 2xl:text-4xl bg-gradient-to-tr from-foreground to-neutral-600 bg-clip-text text-transparent '>
        Skills
      </h1>
      {stack.map((tech, index) => (
        <AnimatedContainer
          key={index}
          className={tech.className}
          delay={index * 0.1}
        >
          <BentoContainer
            key={index}
            className='text-xs rounded-md md:text-xl  backdrop-blur-sm max-lg:p-2 h-full flex items-center place-content-center'
          >
            <tech.component
              className={tech.className ? 'h-16' : 'h-10' + ' max-lg:h-8'}
            />
          </BentoContainer>
        </AnimatedContainer>
      ))}
    </AnimatedContainer>
  );
}
export default MotionStack;
