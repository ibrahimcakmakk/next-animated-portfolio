"use client"
import { motion,AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar'

const TransitionProvider = ({children}) => {

    const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
         <div key={pathname} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
         <motion.div 
            animate={{height:"0vh"}}
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease:"easeOut"}}
            className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
            />
             <motion.div 
            animate={{opacity:0}}
            initial={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            className='fixed m-auto top-0 bottom-0 left-0 w-fit h-fit right-0 text-white text-8xl cursor-default  z-50'
            >
                {pathname.substring(1)}
            </motion.div>
             <motion.div 
            animate={{height:"0vh", transition:{delay:0.5}}}
            initial={{height:"140vh"}}
            className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'/>
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
    </AnimatePresence>
    
  )
}

export default TransitionProvider