import { cn } from '../../lib/utils';

type Props = {
  className?: string;
};

function Send({ className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn(
        className,
        'w-6 h-8 text-neutral-500 hover:text-neutral-300 active:scale-95 transition-all peer-focus:text-neutral-500 ease-in-out'
      )}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
      />
    </svg>
  );
}
export default Send;
