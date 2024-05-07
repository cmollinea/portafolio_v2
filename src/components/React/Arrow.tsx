type Props = {
  children: React.ReactNode;
};

function Arrow({ children }: Props) {
  return (
    <span className='absolute bottom-20' id='scroll-hook'>
      {children}
    </span>
  );
}
export default Arrow;
