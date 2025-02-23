import { Link } from 'react-router-dom';
import ReavelText from '../Components/RevealText';

import bakgrunn from "../../public/LogoFullLandbergBygg.png"

function App() {
  return (
    <>
      <section className="hero relative flex items-center justify-center h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-center text-white px-4">
          <ReavelText className={"text-5xl md:text-7xl font-bold mb-4 uppercase"} DURATION={.5}>Landberg Bygg AS</ReavelText>

          <ReavelText DURATION={1.1}>
            <p className="text-lg md:text-2xl mb-8">
              Førsteklasses tømrerarbeid med tradisjonelt håndverk og moderne teknikker
            </p>
            <Link
              to="/kontakt"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-md transition-all ease-in-out duration-300 hover:bg-blue-800"
            >
              Ta kontakt
            </Link>
          </ReavelText>

          <ReavelText DURATION={1.15} className={"mt-5 text-sm md:text-lg"}><Link to="/om" className='underline-offset-5 text-gray-300 transition-all ease-in-out hover:text-blue-300 hover:underline'>Mer om Landberg bygg</Link></ReavelText>
        </div>

      </section>
    </>
  );
}

export default App;
