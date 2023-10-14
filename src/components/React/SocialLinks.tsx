import Discord from '../icons/Discord';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Message from '../icons/Message';
import Telegram from '../icons/Telegram';
import Twitter from '../icons/Twitter';
import ContactLink from './ContactLink';

const socialNames = [
  'LinkedIn',
  'GitHub',
  'X/Twitter',
  'Telegram',
  'Discord'
  // 'Send Direct Message'
];

const socialIcons = [
  <Linkedin />,
  <Github />,
  <Twitter />,
  <Telegram />,
  <Discord />
  // <Message />
];

const socialLinks = [
  'https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b',
  'https://github.com/cmollinea/',
  'https://twitter.com/proc4stinator',
  'https://t.me/Mouse_Potat0',
  'https://discord.com/users/procastinatordev'
];

function SocialLinks() {
  return (
    <>
      {socialNames.map((name, index) => (
        <ContactLink key={index} href={socialLinks[index]}>
          {socialIcons[index]}
          {name}
        </ContactLink>
      ))}
    </>
  );
}
export default SocialLinks;
