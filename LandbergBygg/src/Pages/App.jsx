import { useState } from 'react'

import ReavelText from '../Components/RevealText'
import InteractiveText from '../Components/InteractiveText'

import '../App.css'


function App() {

  return (
    <>
      <ReavelText className='text-center mt-20 md:text-6xl text-4xl uppercase' DURATION={.5}>LandbergBygg AS</ReavelText>

      <div className='flex justify-center items-center md:h-125 h-100'>
        <ReavelText className='md:text-3xl text-lg md:w-200 w-100 text-center' DURATION={1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates consequuntur odio maxime, nihil, vitae accusantium quidem beatae recusandae deleniti aut necessitatibus nesciunt ut sunt. Nostrum repellat corporis vitae nemo?
        </ReavelText>
      </div>
    </>
  )
}

export default App
