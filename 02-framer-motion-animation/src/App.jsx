import React from 'react'
import {motion} from 'motion/react'
const App = () => {
  return (
    <motion.div 
    initial = {{
      x: 100,
      y:0
    }}
    animate = {{
      x:[100,1000,1000,100,100],
      y:[0,0,600,600,0],
      rotate:[180,260,360,45,180]
    }}
  
    transition={{
      duration:3,
      delay:0.4
    }}
    className='text-white bg-indigo-500 h-70 w-70 border-3 border-white '>
      
    </motion.div>
  )
}

export default App
