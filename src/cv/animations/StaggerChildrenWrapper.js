import React from 'react';
import { motion } from 'framer-motion';

const StaggerChildrenWrapper = ({ children }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <motion.div style={{ height: '100%' }} variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};

export default StaggerChildrenWrapper;
