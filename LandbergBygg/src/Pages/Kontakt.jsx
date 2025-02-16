import ReavelText from '../Components/RevealText'

import '../App.css'

function App() {

  return (
    <>
      <ReavelText className='text-center mt-20 md:text-6xl text-4xl uppercase' DURATION={.5}>Kontakt</ReavelText>

      <div className='flex justify-center items-center md:h-125 h-100'>
        <ReavelText className='md:text-3xl text-lg md:w-200 w-100 text-center' DURATION={1}>
          <p className='text-2xl'>Sprøsmål? Kontakt oss på:</p>
          <p className='text-lg'>Epost: post@landbergbygg.no</p>
          <p className='text-lg'>Tlf: +47 459 11 367</p>
        </ReavelText>
      </div>
    </>
  )
}

export default App
