import Buildsection from "./components/Buildsection/Buildsection";
import CertificateSection from "./components/Certificate/CertificateSection";
import Footer from "./components/Footer/Footer";
import Reconmedation from "./components/Recomendation/Reconmedation";
import Testomonial from "./components/Testomonials/Testomonial";
import WhyCard from "./components/Why-card/WhyCard";
import YouGet from "./components/YouGet/YouGet";
import "animate.css";
function App() {
  return (
    <>
      <div className="p-12 bg-[#0F103F] h-auto">
        <div className="">
          <div className="flex md:justify-start justify-center">
            <img className="md:h-16 h-12" src="LOGO Blue white.svg" alt="" />
          </div>

          <h1 className="leading-7 md:p-12 text-center p-2 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] md:text-5xl text-2xl font-bold">
            <img
              className="animate__animated animate__infinite	infinite animate__pulse animate__slow h-8 md:h-20 top-25 left-6 absolute"
              src="javascript.png"
              alt="javascript_logo"
            />
            MASTER THE ART OF JAVASCRIPT AND REACT JS BOOTCAMP IN 45 DAYS
            <img
              className="animate__animated animate__infinite	infinite  animate__pulse animate__slow h-12 md:h-24 absolute top-[28.5%] md:top-48 right-14"
              src="react.png"
              alt="reactjs_logo"
            />
          </h1>
          <p className="text-center text-zinc-300 text-sm md:text-lg md:px-32 md:pt-0 pt-3">
            45-day offline classes, Monday to Friday. Test on Saturday and Doubt
            solving session on Sunday. Enroll Now! Rated 4.7⭐ by 50+ Students
            in the last Batch. New Batch starts from 1 June🥳.️{" "}
          </p>
          <div className="flex flex-wrap-reverse justify-center md:pt-12">
            {/* <div className="pt-12 md:w-[60vw] ">
              <p className="text-zinc-300 text-sm md:text-lg md:px-32">
                Broaden your skillset and unlock more opportunities by mastering
                JavaScript and React JS.
              </p>
              <br />
              <p className="text-zinc-300 text-sm md:text-lg md:px-32">
                Get assured internship assistance and extensive Job assistance .
              </p>
            </div> */}
            <div className="grid  grid-flow-row grid-cols-2 md:grid-cols-3 pt-12 gap-5">
              <div className="h-12 hover:scale-105 hover:drop-shadow-lg ease-in duration-300 md:p-7 bg-[#080820] text-white text-xs md:text-lg font-bold text-center flex justify-center items-center rounded-xl p-2">
                ☑️ 45-Days offline classes
              </div>
              <div className="h-12 hover:scale-105 hover:drop-shadow-lg ease-in duration-300 md:p-7  bg-[#080820] text-white text-xs md:text-lg font-bold  text-center flex justify-center items-center rounded-xl p-2">
                ⌚ Timing 4:00 PM
              </div>
              <div className="h-12 hover:scale-105 hover:drop-shadow-lg ease-in duration-300 md:p-7 bg-[#080820] text-white text-xs md:text-lg font-bold  text-center flex justify-center items-center rounded-xl p-2">
                🧑‍💻 50+ Students get internship
              </div>
              <div className="h-12 hover:scale-105 hover:drop-shadow-lg ease-in duration-300 md:p-7 bg-[#B254FF] text-white text-xs md:text-lg font-bold  text-center flex justify-center items-center rounded-xl p-2">
                💱 Course Language Hindi
              </div>
              <div className="h-12 hover:scale-105 hover:drop-shadow-lg ease-in duration-300 md:p-7  bg-[#B254FF] text-white md:text-lg font-bold  bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] text-xs text-center flex justify-center items-center rounded-xl p-2">
                Class Date 📆 1 June - 15 July, 2024
              </div>
            </div>
          </div>
          <Testomonial />
          <Reconmedation />
          <Buildsection />
          <YouGet />
          <WhyCard />
          <CertificateSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
