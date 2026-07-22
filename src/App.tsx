import headshot from "./assets/headshot.png";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex-1 flex flex-col grow  bg-[#faf7f1]">
      <section id="home">
        {" "}
        <div className="h-screen px-15">
          <nav className="navBar">
            <span className="text-2xl font-semibold ">FLORA LINDBERG</span>
            <div className="navLinks text-2xl font-semibold h-24">
              <a href="">Home</a>
              <Link to="/projects" >Projects</Link>
              <a href="">Resume</a>
              <Link to="/contact" >Contact</Link>
            </div>
          </nav>
          <main className="flex-1 flex flex-col items-center justify-center">
            <section id="center ">
              <div className="flex flex-col items-center pt-15 ">
                <img className="block" src={headshot} alt="Flora Lindberg" />
                <h1 className="text-7xl font-light">FLORA LINDBERG</h1>
                <h1 className="text-4xl py-5 ">Computer Engineer</h1>
              </div>
              <a href="#about">
                {" "}
                <i
                  className="fi fi-rs-angle-down text-4xl text-[#557255] absolute bottom-4"
                  aria-hidden="true"></i>{" "}
              </a>
            </section>
          </main>
        </div>
      </section>

      <section>
        <section id="about" className="relative min-h-screen">
          <div id="aboutMe" className="px-50 py-10 ">
            <h1 className="text-5xl text-left pb-5">About Me</h1>
            <h1 className="text-justify text-2xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo,{" "}
            </h1>
          </div>
          <div className="px-50 pt-10 text-[#557255]">
            <h1 className="text-5xl text-left">Education and Experience</h1>
            <div className="mt-10 flex w-full gap-5 flex-wrap lg:flex-nowrap ">
              <div className="min-w-0 flex-1 rounded-xl border p-8 pt-5 text-center">
                <i className="fi fi-rs-graduation-cap text-3xl"></i>
                <h1 className="text-3xl pb-3">Education</h1>
                <h2 className="text-xl">
                  BSc graduate in computer engineering at Kungliga Tekniska
                  högskolan
                </h2>
              </div>
              <div className="min-w-0 flex-1 rounded-xl border  p-8 pt-5 text-center">
                <i className="fi fi-rs-badget-check-alt text-3xl"></i>
                <h1 className="text-3xl pb-3">Experience</h1>
                <h2 className="text-xl">Frontend and backend projects</h2>
                <h2 className="text-xl">
                  Project with John Deere in embedded systems
                </h2>
              </div>
              <div className="min-w-0 flex-1 rounded-xl border px-8 pt-5 text-center">
                <i className="fi fi-rs-following text-3xl"></i>
                <h1 className="text-3xl pb-3">Interests</h1>
              </div>
              <div className="absolute bottom-5"></div>
            </div>
          </div>
          <div className="justify justify-center ">
            <a href="#skills">
              {" "}
              <i
                className="fi fi-rs-angle-down text-4xl text-[#557255] text-left absolute bottom-4"
                aria-hidden="true"></i>{" "}
            </a>
          </div>
        </section>

        <div className="relative h-screen w-full flex-grow flex-wrap">
          <section id="skills">
            <div className="pb-40">
              <h1 className="text-5xl py-5">Technical Skills</h1>
              <div className=" gap-15 justify-center text-[#557255] border rounded-xl text-2xl flex-wrap mx-auto max-w-3xl">
                <h1 className="text-3xl p-5">Programming</h1>
                <div className="flex flex-grow gap-15 justify-center pt-5 pb-10">
                  <div>
                    <i className="fi fi-brands-python "></i> <h1>Python</h1>
                  </div>
                  <div>
                    <i className="fi fi-brands-java"></i> <h1>Java</h1>
                  </div>
                  <div>
                    <i className="fi fi-brands-c"></i> <h1>C</h1>
                  </div>
                  <div>
                    <i className="fi fi-brands-postgre"></i> <h1>PostgreSQL</h1>
                  </div>
                  <div>
                    <i className="fi fi-brands-js"></i> <h1>JavaScript</h1>
                  </div>
                </div>
                <div className="flex gap-15 justify-center pb-10">
                  <div>
                    <i className="fi fi-brands-ts"></i> <h1>TypeScript</h1>
                  </div>
                  <div>
                    <i className="fi fi-rs-react"></i> <h1>React</h1>
                  </div>
                  <div>
                    <i className="fi fi-brands-docker"></i> <h1>Docker</h1>
                  </div>
                  <div>
                    <i
                      className="fi fi-rs-code-branch"
                      style={{
                        display: "inline-block",
                        transform: "rotate(180deg) scaleX(-1)",
                      }}></i>{" "}
                    <h1>Git</h1>
                  </div>
                  <div>
                    <div className="">
                      <i className="fi fi-brands-c"></i>
                      <i className="fi fi-rs-plus-small p-0 text-xl"></i>
                      <i className="fi fi-rs-plus-small p-0 text-xl"></i>
                    </div>
                    <h1>C++</h1>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl m-10 flex-wrap mx-auto max-w-md">
                <h1 className="text-3xl p-5">Mathematical Programming</h1>
                <div className="flex gap-20 justify-center p-10">
                  <div className="flex flex-col items-center">
                    <img
                      width="50"
                      alt="Matlab Logo"
                      src="	https://static.thenounproject.com/png/3451796-200.png"
                    />
                    <h1>MATLAB</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      width="50"
                      src="	https://cdn.freebiesupply.com/logos/large/2x/mathematica-1-logo-black-and-white.png"
                    />
                    <h1>Mathematica</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="sticky bottom-5 ml-auto w-fit p-10 pb-0 text-[#557255]">
          <a href="#home" className="text-2xl text-[#557255]">
            <i className="fi fi-rs-chevron-double-up"></i>
          </a>
        </div>
      </section>
      <div className="font-mono text-sm">
        <h1 className="!important! font-mono">
          Copyright
          <i className="fi fi-rs-copyright px-2 text-xs"></i>
            2026 Flora Lindberg. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default App;
