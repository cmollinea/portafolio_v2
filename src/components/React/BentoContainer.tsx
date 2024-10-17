import { cn } from '../../lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const BentoContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'border rounded-md border-neutral-500/20 p-6 bg-neutral-500/5',
        className
      )}
    >
      {children}
    </div>
  );
};
