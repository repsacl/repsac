import { motion } from "motion/react"


function Box() {
  return (
    <>
        <p className="m-5">Boxes that reveals on load</p>
        <motion.section className="flex justify-center align-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { 
              opacity: 1, 
              transition : {
                staggerChildren: 0.1,
                // transition: { duration : 1}
              },
            },
          }}
        >
          <Boxes>1</Boxes>
          <Boxes>2</Boxes>
          <Boxes>3</Boxes>
          <Boxes>4</Boxes>
          <Boxes>5</Boxes>
          <Boxes>6</Boxes>

        </motion.section>
    </>
  )
}
export default Box



const Boxes = ({ children }) => {
    return (
      <motion.div className="w-30 h-30 bg-blue-500 m-5 p-2 shadow-[3px_3px_6px_rgba(0,0,0,.7)]"
        whileHover={{ scale: 1.1, opacity: 0.85 }}
        whileTap={{ rotate: 45, scale: 0.9 }} 
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      >
        {children}
      </motion.div>
    )
  }