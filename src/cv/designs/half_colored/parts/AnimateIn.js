import React from 'react';
import {motion} from 'framer-motion'

const AnimateIn = ({children}) => {

  return (
    <motion.div
      
    >
      {children}
    </motion.div>
  );
}

export default AnimateIn;