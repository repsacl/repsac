import { useState } from "react";
import { motion } from "motion/react";

function Box() {
    return (
      <>
        <p className="m-5">Boxes that reveals on load</p>
        <motion.section
          className="flex justify-center align-center mb-100"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <Boxes boxContent={"Dette er boks 1"} >1</Boxes>
          <Boxes boxContent={"Dette er boks 2"} >2</Boxes>
          <Boxes boxContent={"Dette er boks 3"} >3</Boxes>
        </motion.section>
      </>
    );
  }
  
  export default Box;
  
  const Boxes = ({ children, boxContent }) => {
    const [isScaled, setIsScaled] = useState(false);
  
    const handleClick = () => {
      setIsScaled(!isScaled); // Bytt mellom skalert og normalt
    };
  
    return (
      <motion.div
        className="w-30 h-30 bg-blue-500 m-5 p-2 shadow-[3px_3px_6px_rgba(0,0,0,.7)] cursor-pointer"
        whileHover={{
          scale: isScaled ? 1 : 1.1,
          opacity: isScaled ? 1 : 0.85
        }}
        whileTap={{
            rotate: isScaled ? 0 : 0,
            scale: isScaled ? 1 : 0.9,

        }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        initial={{ width: '120px', height: '120px' }}
        animate={{
          width: isScaled ? '900px' : '120px', // Endrer bredde
          height: isScaled ? '500px' : '120px', // Endrer høyde
          x: isScaled ? '-50%' : 0, // Flytter boksen til midten horisontalt ved skalering
          y: isScaled ? '-50%' : 0, // Flytter boksen til midten vertikalt ved skalering
        }}
        onClick={handleClick}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          position: isScaled ? 'fixed' : 'relative', // Fiks posisjon når boksen er skalert
          top: isScaled ? '50%' : 'auto', // Plasserer boksen midt på skjermen
          left: isScaled ? '50%' : 'auto', // Plasserer boksen midt på skjermen
          transform: isScaled ? 'translate(-50%, -50%)' : 'none', // Plasserer boksen nøyaktig midt
          zIndex: isScaled ? 10 : 'auto', // Gir en høyere z-index når boksen er skalert, så den vises foran andre
        }}

        boxContent={boxContent}
      >
        { isScaled ? boxContent : children}
      </motion.div>
    );
  };