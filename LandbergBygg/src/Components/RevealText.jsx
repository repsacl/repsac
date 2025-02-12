import { motion } from 'motion/react';


const DURATION = .3
const ReavelText = ({ children, className }) => {
  return(
    <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{
      duration: DURATION,
      ease: "easeInOut",
    }}

    className={className}
    >
      {children}
    </motion.p>
  )
}

export default ReavelText;