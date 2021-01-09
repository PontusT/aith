import React from 'react';
import {motion} from 'framer-motion';

const StaggerChild = ({children, sticky}) => {

  const stagger = {
    hidden: { opacity: 0, x: -500 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      style={{
        paddingTop: sticky ? 10 : 0, 
        position: sticky? 'sticky' : 'relative', 
        top: 0}}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export default StaggerChild;