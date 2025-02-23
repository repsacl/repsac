import RevealText from '../Components/RevealText';

import '../App.css';

function Contact() {
  return (
    <>
      {/* Hero-seksjon med gradient-bakgrunn */}
      <section className="relative flex flex-col justify-center items-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <RevealText className="relative text-white text-center text-4xl md:text-6xl uppercase font-bold" DURATION={0.5}>
          Kontakt oss
        </RevealText>

        {/* Kontaktinfo-boks */}
        <div className="relative w-11/12 md:w-3/4 bg-white bg-opacity-90 p-10 mb-20 mt-15 rounded-2xl shadow-xl">
          <RevealText className="md:text-2xl text-lg text-gray-800 text-center" DURATION={1.1}>
            <p className="text-lg md:text-2xl font-semibold">Har du spørsmål? Ta kontakt med oss!</p>
            <br />
            <p className="text-lg"><strong>E-post:</strong> post@landbergbygg.no</p>
            <p className="text-lg"><strong>Telefon:</strong> +47 459 11 367</p>
            <br />
            <span className="text-blue-700 font-bold text-md md:text-xl">
              <a href="mailto:post@landbergbygg.no" className="underline-offset-4 transition-all ease-in duration-300 hover:underline">
                Send oss en e-post
              </a>
            </span>
          </RevealText>
        </div>
      </section>
    </>
  );
}

export default Contact;
