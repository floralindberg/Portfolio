import headshot from "./assets/headshot.png";
import { Link } from "react-router-dom";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  return (
    <div>
      <div className="flex-1 flex flex-col grow bg-[#faf7f1] ">
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
                    <a href="/" className="text-xl">
                      Home
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/projects" className="text-xl">
                      Projects
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/src/assets/resume.pdf" className="text-xl">
                      Resume
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/contact" className="text-xl">
                      Contact
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <main className="flex flex-col items-center justify-center">
              <section id="center">
                <div className="flex flex-col items-center pt-15 ">
                  <img className="block" src={headshot} alt="Flora Lindberg" />
                  <h1 className=" text-6xl lg:text-7xl font-light">
                    FLORA LINDBERG
                  </h1>
                  <h1 className="text-4xl py-5 ">Computer Engineer</h1>
                </div>{" "}
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

          <div className="relative h-screen w-full grow flex-wrap px-10 pb-0">
            <section id="skills">
              <div className="">
                <h1 className="text-5xl py-10">Technical Skills</h1>
                <div className=" gap-15 justify-center text-[#557255] border-3 border-[#557255] rounded-xl text-2xl flex-wrap mx-auto max-w-3xl">
                  <h1 className="py-5 ">Programming</h1>
                  <div className="gap-5 flex grow lg:gap-10 justify-center pt-5 pb-10 text-xs lg:text-2xl flex-wrap mx-auto max-w-3xl px-5">
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
                    <div className="flex flex-col items-center gap-1">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 lg:w-7 lg:h-7 text-[#557255]">
                        <title>Linux</title>
                        <path
                          fill="currentColor"
                          d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"
                        />
                      </svg>
                      <p>Linux</p>
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

              <div className="pt-5 sm:pr-10 font-mono text-sm md:absolute md:bottom-0 md:w-full md:pr-20 justify-center pb-0">
                <h1 className="!important! font-mono text-center pl-0 ">
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
