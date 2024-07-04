import React from 'react'
import {motion} from "framer-motion"
import LoadingLine from '../components/LoadingLine'

function Loading() {
  return (
    <div>
        <LoadingLine/>
    <motion.div className='bg-zinc-800 h-screen w-full absolute z-30'
    initial ={{y:"0%"}}
    animate ={{y:"-100%"}}
    transition={{duration:1.6, delay:2}}
    >
        
    </motion.div>
    </div>
  )
}

export default Loading