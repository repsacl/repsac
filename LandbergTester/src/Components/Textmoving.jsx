import { useState } from 'react'
import { motion } from "motion/react"


function Textmoving() {
  return (
    <>
        <p className="m-2 mt-15">Interactive texts</p>
        <div className="flex flex-col justify-center p-5 bg-[rgb(25,25,25)] shadow-[3px_3px_6px_rgba(0,0,0,.7)]">
          <InteractiveText>Twitter</InteractiveText>
          <InteractiveText>Linkedin</InteractiveText>
          <InteractiveText>Facebook</InteractiveText>
          <InteractiveText>Instagram</InteractiveText>
        </div>
    </>
  )
}

export default Textmoving




const InteractiveText = ({ children }) => {
  return (
    <motion.div className="relative block text-6xl uppercase overflow-hidden whitespace-nowrap"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        variants={{ initial: { y: 0, opacity: .3 }, hovered: { y: "-100%" } }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{ initial: { y: "100%", opacity: 1 }, hovered: { y: 0, opacity: 1 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};