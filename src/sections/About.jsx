import { useRef } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";



const About = () => {
    const grid2Container = useRef();
  return (
    <section section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1*/}
        <div className="flex items-end grid-default-color grid-1">
          <img src="images/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Chris</p>
            <p className="subtext">
              I'm an aspring Software Engineer currently pursuing a Bachelors Degree in Computer Science at Bowie State University.
            </p>
          </div>
        </div>
        {/* Grid 2*/}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
              <p className="flex-items-end text-5xl text-gray-500">
                CODING LANGUAGES
              </p>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "75deg", top: "30%", left: "20%"}}
                text="PYTHON"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-30deg", top: "60%", left: "45%"}}
                text="REACT.JS"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "90deg", bottom: "30%", left: "70%"}}
                text="CSS"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-45deg", top: "55%", left: "0%"}}
                text= "HTML"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "20deg", top: "10%", left: "30%"}}
                text="JAVA"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "10deg", top: "10%", left: "10%"}}
                img src="/assets/logos/html.svg"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "-20deg", top: "10%", left: "70%"}}
                img src="/assets/logos/css.svg"/>
              <Card
                containerRef={grid2Container}
                style={{ rotate: "20deg", bottom: "10%", left: "70%"}}
                img src="/assets/logos/tailwindcss.svg"/>
            </div>
        </div>
        {/* Grid 3*/}
        <div className="grid-black-color grid-3">
          <h3 className="headtext mb-6">Background</h3>
          <ul className="space-y-6 text-[18px] leading-relaxed">
            {[
              "Passionate about blending creativity with technology to solve challenges",
              "Always exploring new tools, concepts, & technologies.",
              "Outside of work, I’m a big sports, gaming, and cinema fan"
            ].map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-4 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 border-2 border-[#915EFF] rotate-45 opacity-70"></span>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Grid 4*/}
        <div className="grid-special-color grid-4">
        <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Take a look at my resume
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
            Resume
          </a>
        </div>
        </div>
        {/* Grid 5*/}
        <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%] flex flex-col h-full">
            <p className="headText">Teck Skills</p>
            <p className="subtext">
              I have experience in a variety of languages, frameworks, and tools. Check out my GitHub below.
            </p>
            <a
              href="https://github.com/ccm108"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110 text-center"
            >
              GitHub
            </a>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;



