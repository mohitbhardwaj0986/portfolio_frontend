import React from 'react'
import {motion} from "framer-motion"
function LoadingLine() {
  return (
    <motion.div className='fixed z-40 h-1 w-full' animate={{opacity:0}}
    transition={{delay:2}}
    >
    <motion.div
    className="loadingline h-1 rounded-md w-full "
    initial={{ x: "-100%" }}
    animate={{ x: "0%" }}
    transition={{ duration: 1.5, delay: 0.5, ease:'easeOut' }}
></motion.div>
</motion.div>
  )
}

export default LoadingLine