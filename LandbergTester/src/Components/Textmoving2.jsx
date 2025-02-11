import { useState } from 'react'
import { motion } from "motion/react"


function Textmoving2() {
  return (
    <>
        <p className="m-2 mt-15">Interactive texts version 2</p>
        <div className="flex flex-col justify-center mb-30 p-5 bg-[rgb(25,25,25)] shadow-[3px_3px_6px_rgba(0,0,0,.7)]">
          <InteractiveText2>Twitter</InteractiveText2>
          <InteractiveText2>Linkedin</InteractiveText2>
          <InteractiveText2>Facebook</InteractiveText2>
          <InteractiveText2>Instagram</InteractiveText2>
        </div>
    </>
  )
}

export default Textmoving2


const DURATION = 0.25
const STAGGER = 0.025
const InteractiveText2 = ({children}) =>{
  return(
    <motion.p className="relative block  text-6xl uppercase overflow-hidden whitespace-nowrap"
    initial="initial"
    whileHover="hovered"
    >

      <span>{children.split("").map((letter, i) => {
        return <motion.span key={i} className="inline-block"

        variants={{
          initial: { y: 0, opacity: 0.3 },
          hovered: { y: "-100%", opacity: 0.5 }
        }}

        transition={{
          //delay: .2*i

          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i
        }}

        >
          {letter}
        </motion.span>
      })}
      </span>


      <span className="absolute inset-0" >{children.split("").map((letter, i) => {
        return <motion.span key={i} className="inline-block"
        variants={{
          initial: { y: "100%", opacity: 1 },
          hovered: { y: 0, opacity: 1 }
        }}

        transition={{
          //delay: .2*i

          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i
        }}

        >
          {letter}
        </motion.span>
      })}
      </span>

    </motion.p>
  )
}