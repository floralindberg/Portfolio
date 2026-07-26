import headshot from "./assets/headshot.png";
import { Link } from "react-router-dom";
import "./App.css";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  return (
    <div>
      <div className="flex-1 flex flex-col grow bg-[#faf7f1]">
        <section id="home">
          {" "}
          <div className="h-screen px-15">
            <nav className="navBar pt-5 lg:pt-0">
              <span className="pl-8 lg:text-left lg:pl-0 text-2xl font-semibold">
                FLORA LINDBERG
              </span>

              <div className="navLinks display-inline text-2xl font-semibold h-24 hidden md:flex">
                <a href="/">Home</a>
                <Link to="/projects">Projects</Link>
                <a href="/src/assets/resume.pdf">Resume</a>
                <Link to="/contact">Contact</Link>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="md:hidden absolute right-3 pt-2 text-[#587258]"
                  render={
                    <Button variant={"secondary"}>
                      <i className="fi fi-rs-burger-menu text-[#587258] text-xl "></i>
                    </Button>
                  }
                />
                <DropdownMenuContent className=" hover:bg-accent hover:text-accent-foreground text-[#587258] font-bold bg-[#faf7f1] text-xl">
                  <DropdownMenuItem className="text-xl">
                   <a href="/" className="text-xl">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/projects" className="text-xl">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/src/assets/resume.pdf" className="text-xl">Resume</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/contact" className="text-xl">Contact</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <main className="flex flex-col items-center justify-center">
              <section id="center" >
                <div className="flex flex-col items-center pt-15 ">
                  <img className="block" src={headshot} alt="Flora Lindberg" />
                  <h1 className=" text-6xl lg:text-7xl font-light">FLORA LINDBERG</h1>
                  <h1 className="text-4xl py-5 ">Computer Engineer</h1>
                </div>
                {" "}
                <a href="#about">
                  {" "}
                  <i
                    className="fi fi-rs-angle-down hidden lg:absolute lg:bottom-4 lg:block lg:text-4xl lg:text-[#557255]" 
                    aria-hidden="true"></i>{" "}
                </a>
              </section>
            </main>
          </div>
        </section>

        <section>
          <section
            id="about"
            className="pt-10 px-10 lg:p-0 justify-center lg:relative lg:min-h-screen">
            <div id="aboutMe" className="lg:px-50 lg:py-10 ">
              <h1 className="text-center text-5xl lg:text-left pb-5">
                About Me
              </h1>
              <h2 className="text-justify text-xl lg:text-2xl ">
                I am a recent computer engineering graduate from KTH with a
                background in sales and service. I have experience in full-stack
                development, from system architecture and databases to the code
                that ties everything together to solve real-life problems.
                Combining my interest in cybersecurity with software
                engineering, I aim to build solutions that are reliable, secure,
                and useful.
              </h2>
            </div>
            <div className=" lg:px-50 py-10 text-[#557255]">
              <h1 className="text-5xl text-left">Education and Experience</h1>
              <div className=" mt-10 flex flex-col lg:flex lg:flex-row w-full gap-5 flex-wrap lg:flex-nowrap ">
                <div className="min-w-0 flex-1 rounded-xl border-3 border-[#557255] p-8 py-5 text-center">
                  <i className="fi fi-rs-graduation-cap text-3xl"></i>
                  <h1 className="text-3xl pb-3 justify-center text-center">
                    Education
                  </h1>
                  <h2 className="text-xl">
                    BSc graduate in Computer Engineering at Kungliga Tekniska
                    högskolan
                  </h2>
                </div>
                <div className="min-w-0 flex-1 rounded-xl border-3 border-[#557255]  p-8 py-5 text-center">
                  <i className="fi fi-rs-badget-check-alt text-3xl"></i>
                  <h1 className="text-3xl pb-3">Experience</h1>
                  <h2 className="text-xl">Frontend and backend projects</h2>
                  <h2 className="text-xl">Test-driven development</h2>
                  <h2 className="text-xl">Spec-driven development</h2>
                </div>
                <div className="min-w-0 flex-1 rounded-xl border-3 border-[#557255] px-8 py-5 text-center">
                  <i className="fi fi-rs-following text-3xl"></i>
                  <h1 className="text-3xl pb-3">Main Interests</h1>
                  <h2 className="text-xl">
                    Cybersecurity – penetration testing and network
                    security{" "}
                  </h2>
                  <h2 className="text-xl">Backend development</h2>
                </div>
                <div className="absolute bottom-5"></div>
              </div>
            </div>
            <div className="justify justify-center flex">
              <a href="#skills">
                {" "}
                <i
                  className="fi fi-rs-angle-down hidden lg:block lg:absolute lg:text-4xl lg:text-[#557255] lg:text-center lg:bottom-4"
                  aria-hidden="true"></i>{" "}
              </a>
            </div>
          </section>

          <div className="relative h-screen w-full grow flex-wrap px-10">
            <section id="skills">
              <div className="">
                <h1 className="text-5xl py-10">Technical Skills</h1>
                <div className=" gap-15 justify-center text-[#557255] border-3 border-[#557255] rounded-xl text-2xl flex-wrap mx-auto max-w-3xl">
                  <h1 className="py-5 ">Programming</h1>
                  <div className="gap-5 flex grow lg:gap-15 justify-center pt-5 pb-10 text-xs lg:text-2xl">
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
                      <i className="fi fi-brands-postgre"></i>{" "}
                      <h1>PostgreSQL</h1>
                    </div>
                    <div>
                      <i className="fi fi-brands-js align-top inline-block scale-135 -translate-y-2"></i>{" "}
                      <h1>JavaScript</h1>
                    </div>
                  </div>
                  <div className="text-xs lg:text-2xl flex gap-5 lg:gap-10 justify-center pb-10 text-[#557255]">
                    <div>
                      <svg
                        viewBox="6 11 13 9"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 lg:w-7 lg:h-7 text-[#557255] inline-block align-middle">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h1>TypeScript</h1>
                    </div>
                    <div>
                      <i className="fi fi-rs-react"></i> <h1>React</h1>
                    </div>
                    <div>
                      <i className="fi fi-brands-docker"></i> <h1>Docker</h1>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <svg
                        viewBox="150 150 770 950"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className="w-3 h-3 lg:w-7 lg:h-7 text-[#557255]">
                        <path
                          fill="#557255"
                          d="M499 228q-21 0 -36 15l-73 73l92 92q17 -6 34 -2t29.5 16.5t16 29.5t-1.5 34l88 88q17 -5 34 -1.5t30 16.5q18 18 18 43.5t-18 43t-43.5 17.5t-43.5 -17q-13 -14 -16.5 -32t3.5 -35l-83 -83v218q9 4 16 11q18 18 18 43.5t-18 43.5t-43.5 18t-43 -18t-17.5 -43.5t18 -43.5
                            q8 -8 20 -13v-220q-12 -4 -20 -13q-14 -13 -17.5 -31.5t3.5 -35.5l-90 -91l-240 240q-15 15 -15 36.5t15 36.5l349 349q15 15 36.5 15t36.5 -15l348 -348q15 -15 15 -36.5t-15 -36.5l-349 -349q-15 -15 -37 -15z"
                        />
                      </svg>
                      <h1>Git</h1>
                    </div>
                    <div>
                      <div className="">
                        <i className="fi fi-brands-c"></i>
                        <i className="fi fi-rs-plus-small p-0 text-xs lg:text-xl"></i>
                        <i className="fi fi-rs-plus-small p-0 text-xs lg:text-xl"></i>
                      </div>
                      <h1>C++</h1>
                    </div>
                  </div>
                </div>

                <div className="border-3 border-[#557255] rounded-xl m-10 flex-wrap mx-auto max-w-md ">
                  <h1 className="text-3xl p-5">Mathematical Programming</h1>
                  <div className="flex gap-10 lg:gap-20 justify-center p-10">
                    <div className="flex flex-col items-center">
                      <img
                        width="40"
                        alt="Matlab Logo"
                        src="	https://static.thenounproject.com/png/3451796-200.png"
                        className="[filter:invert(38%)_sepia(23%)_saturate(638%)_hue-rotate(60deg)_brightness(94%)_contrast(90%)]"
                      />
                      <h1>MATLAB</h1>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-9 md:h-9 text-[#557255] inline-block align-middle">
                        <title>Wolfram Mathematica</title>
                        <path
                          fill="currentColor"
                          d="M15.74 10.7c-.53-1.53.14-4 .14-4S13.6 8.01 11.93 8 8.13 6.7 8.13 6.7s.56 2.46.07 4.04c-.48 1.58-2.47 3.34-2.47 3.34s2.58.23 3.85 1.1S12 18.64 12 18.64s.78-2.35 2.32-3.41c1.54-1.07 3.96-1.15 3.96-1.15s-2-1.84-2.54-3.37zm-2 3.69c-1.09.81-1.75 2.19-1.75 2.19s-.76-1.43-1.8-2.22c-1.05-.79-2.57-.97-2.57-.97a5.06 5.06 0 0 0 1.53-2.37c.46-1.54.18-2.73.18-2.73s.92.7 2.62.7c1.7 0 2.79-.7 2.79-.7s-.38 1.58.07 2.7c.44 1.14 1.57 2.41 1.57 2.41s-1.56.17-2.64.99zM13.73 9.6s-.95.38-1.77.37c-.82 0-1.7-.37-1.7-.37.05.58 0 1.15-.17 1.7-.27.86-.91 1.64-.91 1.64A4.23 4.23 0 0 1 12 14.95s.45-.85 1.18-1.33c.5-.31 1.05-.55 1.63-.7 0 0-.74-.78-1.02-1.57-.28-.78-.06-1.75-.06-1.75zM20.1 12l3.31-3.7-4.85-1.07.5-4.94-4.56 2L12 0 9.5 4.29l-4.55-2 .49 4.95L.59 8.29 3.89 12 .6 15.7l4.85 1.07-.5 4.94 4.55-2L12 24l2.5-4.29 4.56 2-.5-4.94 4.85-1.06-3.3-3.71zm-5.27 3.95C14 16.56 12 20.81 12 20.81S10.5 16.95 9 15.95c-1.48-1-5.38-1.22-5.38-1.22s2.99-2.37 3.57-4.47c.59-2.1-.37-5.37-.37-5.37s2.9 2.1 5.08 2.1c2.17 0 5.26-2.1 5.26-2.1s-.82 4.5-.53 5.46c.3.96 3.73 4.38 3.73 4.38s-4.7.62-5.54 1.22z"
                        />
                      </svg>
                      <h1>Mathematica</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 pr-10 font-mono text-sm absolute bottom-0 lg:w-full lg:pr-20 justify-center">
                <h1 className="!important! font-mono text-center pl-0">
                  Copyright
                  <i className="fi fi-rs-copyright px-2 text-xs"></i>
                  2026 Flora Lindberg. All rights reserved.
                </h1>
              </div>
            </section>
          </div>
          <div className="sticky bottom-5 ml-auto w-fit pr-10 pb-0 text-[#557255]">
            <a href="#home" className="text-2xl text-[#557255]">
              <i className="fi fi-rs-chevron-double-up"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
