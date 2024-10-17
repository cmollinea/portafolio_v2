import { delay, motion } from 'framer-motion';
import { config } from '../../constants/motionVariant';

export const AnimatedContainer = ({
  children,
  delay,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      {...config}
      transition={{ ...config.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
