import { motion } from "motion/react"

import Textmoving from "./Components/Textmoving"
import Textmoving2 from "./Components/Textmoving2"
import BoxReveal from "./Components/BoxReveal"
import RevealboxInside from "./Components/RevealboxInside"

import './App.css'

function App() {
  return (
    <>
      <main className='flex flex-col items-center justify-center mt-20'>

        <BoxReveal/>

        <Textmoving/>

        <Textmoving2/>

        <RevealboxInside/>
      </main>
    </>
  )
}

export default App
