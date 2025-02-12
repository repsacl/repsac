import { useState } from 'react'

import ReavelText from './Components/RevealText'
import InteractiveText from './Components/InteractiveText'

import './App.css'


import line1 from './assets/llline.svg'

function App() {

  return (
    <>
      
      <InteractiveText className="text-center mt-20 md:text-6xl text-3xl uppercase">Landberg Bygg AS</InteractiveText>
      {/* <h1 className='text-center mt-20 md:text-6xl text-3xl uppercase'>landberg bygg as</h1> */}

      {/* <div>
        <img src={line1} alt='line' className='md:w-200 w-100 absolute -z-10' />
      </div> */}

      <div className='flex justify-center items-center md:h-200 h-125'>
        <ReavelText className='md:text-3xl text-lg md:w-200 w-100'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates consequuntur odio maxime, nihil, vitae accusantium quidem beatae recusandae deleniti aut necessitatibus nesciunt ut sunt. Nostrum repellat corporis vitae nemo?
        </ReavelText>
      </div>
    </>
  )
}

export default App
