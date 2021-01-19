import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Delayed = ({ children, waitBeforeShow = 500 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return (
    <>
      <AnimatePresence>
        {isShown && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Delayed;
