import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Sidebar></Sidebar>
            <div className='wrapper'>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Zhang Fei</motion.span>
                <div className='social'>
                    <a href="#"><img src="/CodeTwo/QQ.png" alt="" /></a>
                    <a href="#"><img src="/CodeTwo/微信.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar