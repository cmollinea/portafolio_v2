import { cn } from '../../lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const BentoContainer = ({ children, className }: Props) => {
  return (
    <div
      className={cn('border rounded-md border-border p-6 bg-card', className)}
    >
      {children}
    </div>
  );
};
