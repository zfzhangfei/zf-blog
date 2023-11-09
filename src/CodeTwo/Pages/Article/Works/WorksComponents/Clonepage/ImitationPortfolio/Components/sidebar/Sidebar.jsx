import React from 'react'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import { useState } from 'react'
import { motion } from 'framer-motion'

 const variants = {
    open: {
      clipPath: "circle(120vh at 50px 50px)",
      transitiob: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transitiob: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }
  
const Sidebar = () => {
  const [open, setOpen] = useState(false)


 


  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links></Links>
      </motion.div>

      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  )
}

export default Sidebar