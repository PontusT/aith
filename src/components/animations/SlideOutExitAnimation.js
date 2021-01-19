import React from 'react';
import { motion } from 'framer-motion';

/**
 * NOTE: This needs to we wrapper in <AnimatePresence></AnimatePresence>
 */
const SlideOutInAnimation = ({ children, animationKey }) => (
  <motion.div
    key={animationKey}
    transition={{
      duration: 10,
      type: 'spring',
      damping: 40,
      stiffness: 500,
    }}
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default SlideOutInAnimation;
