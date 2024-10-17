import Discord from '../icons/Discord';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Message from '../icons/Message';
import Telegram from '../icons/Telegram';
import Twitter from '../icons/Twitter';
import ContactLink from './ContactLink';

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
      {social.map(({ name, element, link, className }) => (
        <ContactLink
          className={className ?? 'col-span-2'}
          key={name}
          href={link}
        >
          {element}
          <span>{name}</span>
        </ContactLink>
      ))}
    </>
  );
}
export default SocialLinks;
