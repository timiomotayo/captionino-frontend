'use client';

import { motion } from "framer-motion"

export function Logo(props) {
  return (
    <div {...props}>
      <div className="flex items-center space-x-2 transition-transform transform hover:scale-97">
        <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
          <img src="/favicon-pink.png" alt="App logo pink" className='h-8 w-auto'/>
        </motion.div>
          <span className='font-josefin'><span>Captio</span><span className="text-pink-600 font-bold">Nino</span></span>  
      </div>
    </div>
  )
}
          