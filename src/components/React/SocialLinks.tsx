import Discord from '../icons/Discord';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Message from '../icons/Message';
import Telegram from '../icons/Telegram';
import Twitter from '../icons/Twitter';
import ContactLink from './ContactLink';

const socialNames = [
  'GitHub',
  'LinkedIn',
  'X/Twitter',
  'Telegram',
  'Discord'
  // 'Send Direct Message'
];

const socialIcons = [
  <Github />,
  <Linkedin />,
  <Twitter />,
  <Telegram />,
  <Discord />
  // <Message />
];

const socialLinks = [
  'https://github.com/cmollinea/',

  'https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b',
  'https://twitter.com/proc4stinator',
  'https://t.me/Mouse_Potat0',
  'https://discord.com/users/procastinatordev'
];

function SocialLinks() {
  return (
    <>
      {socialNames.map((name, index) => (
        <ContactLink
          className={
            socialLinks[index].includes('github')
              ? 'col-span-2 row-span-2 flex-col'
              : undefined
          }
          key={index}
          href={socialLinks[index]}
        >
          {socialIcons[index]}
          <span className='max-[900px]:sr-only'>
            {name === 'GitHub' ? '' : name}
          </span>
        </ContactLink>
      ))}
    </>
  );
}
export default SocialLinks;
