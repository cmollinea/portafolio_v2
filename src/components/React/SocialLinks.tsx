import Discord from '../icons/Discord';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Telegram from '../icons/Telegram';
import Twitter from '../icons/Twitter';
import { AnimatedContainer } from './AnimatedContainer';
import { BentoContainer } from './BentoContainer';

const social = [
  {
    name: 'GitHub',
    element: <Github />,
    link: 'https://github.com/cmollinea/',
    className: 'col-span-3'
  },
  {
    name: 'LinkedIn',
    element: <Linkedin className='w-14 h-14' />,
    link: 'https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b'
  },
  {
    name: 'Twitter',
    element: <Twitter className='w-14 h-14' />,
    link: 'https://twitter.com/proc4stinator'
  },
  {
    name: 'Telegram',
    element: <Telegram className='w-14 h-14' />,

    link: 'https://t.me/Mouse_Potat0'
  },
  {
    name: 'Discord',
    element: <Discord className='w-14 h-14' />,
    link: 'https://discord.com/users/procastinatordev'
  }
];

function SocialLinks() {
  return (
    <>
      {social.map(({ name, element, link, className }, index) => (
        <a
          target='_blank'
          href={link}
          className={`group relative transition-colors ${
            className ?? 'col-span-2'
          }`}
        >
          <AnimatedContainer className='w-full h-full' delay={index * 0.2}>
            <BentoContainer className='border place-content-center  hover:border-transparent overflow-hidden w-full h-full p-4  flex items-center font-bold rounded-md  bento-container'>
              <span className='z-30 relative flex flex-col text-xs gap-2 text-neutral-500 group-hover:text-sky-500 transition-colors ease-in-out items-center'>
                {element}
                <span>{name}</span>
              </span>{' '}
              <div className='absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 from-gray-200/20 to-transparent z-20 transition-opacity duration-200 ease-in-out backdrop-blur-[1px]'></div>
            </BentoContainer>
          </AnimatedContainer>
        </a>
      ))}
    </>
  );
}
export default SocialLinks;
