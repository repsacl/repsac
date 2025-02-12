import { Link } from "react-router-dom";


function Nopage() {

  return (
    <>
    <div>
      <h1 className='font-bold text-5xl mt-10 text-center'>Error 404, du skal ikke være her...</h1>
      <Link to='/' className='text-center block mt-5 text-blue-500'>Gå Hjem</Link>
    </div>
    </>
  )
}

export default Nopage
