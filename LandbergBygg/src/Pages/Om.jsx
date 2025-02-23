import { Link } from 'react-router-dom';
import RevealText from '../Components/RevealText';

import '../App.css';

function About() {
  return (
    <>
      {/* Hero-seksjon med bakgrunnsbilde */}
      <section
        className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <RevealText className={"relative text-white text-center text-4xl md:text-6xl uppercase font-bold"} DURATION={0.5}>
          Om Landberg Bygg AS
        </RevealText>

        <div className="relative w-11/12 md:w-3/4 bg-white bg-opacity-90 p-10 mb-20 mt-15 rounded-2xl shadow-xl">
          <RevealText className={"md:text-2xl text-lg text-gray-800"} DURATION={1.1}>
            Hos <strong>Landberg Bygg AS</strong> er vi stolte av å tilby førsteklasses tømrerarbeid til våre kunder. Med flere års erfaring i bransjen og moderne løsninger, leverer vi skreddersydde løsninger som oppfyller dine behov og overgår dine forventninger.
            <br />
            <br />
            Vi tar på oss oppdrag som rehabilitering og renovering til mindre reparasjoner og vedlikehold. Vårt mål er å kombinere tradisjonelt håndverk med moderne teknikker for å sikre høy kvalitet og varige resultater. Uansett prosjektets størrelse eller kompleksitet, kan du stole på at vi leverer arbeid av høy standard, til avtalt tid og innenfor budsjett.
            <br />
            <br />
            <span className="text-blue-700 font-bold"><Link to="/kontakt" className='underline-offset-4 transition-all ease-in duration-300 hover:underline'>Kontakt oss</Link></span> for en uforpliktende befaring og la oss hjelpe deg med å gjøre dine byggeprosjekter til virkelighet.
          </RevealText>
        </div>
      </section>
    </>
  );
}

export default About;
