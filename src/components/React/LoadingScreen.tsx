import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    body[0].style.overflow = 'auto';
    setLoading(false);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className='fixed top-0 bottom-0 left-0 right-0 z-[60] bg-black flex flex-col place-content-center items-center space-y-5'
        >
          <img src='/og.png' className='animate-pulse' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
