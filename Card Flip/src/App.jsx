import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div 
      className='flex items-center justify-center h-screen bg-black' 
      style={{ perspective: '1000px' }} // 3D perspective
    >
      <motion.div 
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
        className='h-[200px] w-[200px] bg-green-700/70 rounded-2xl border-2 border-white flex items-center justify-center text-white font-bold'
      >
        CARD
      </motion.div>
    </div>
  )
}

export default App