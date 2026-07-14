import { useState } from "react";
import headshot from "./assets/headshot.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-1 flex flex-col grow ">
      <section id="home">
        {" "}
        <div className="h-screen px-15">
          <nav className="navBar">
            <span className="text-2xl font-semibold ">FLORA LINDBERG</span>
            <div className="navLinks text-2xl font-semibold h-24">
              <a href="">Home</a>
              <a href="">Projects</a>
              <a href="">Resume</a>
              <a href="">Contact</a>
            </div>
          </nav>
          <main className="flex-1 flex flex-col items-center justify-center">
            <section id="center">
              <div className="flex flex-col items-center ">
                <img className="block" src={headshot} alt="Flora Lindberg" />
                <h1 className="text-7xl font-light">FLORA LINDBERG</h1>
                <h1 className="text-4xl py-5">Computer Engineer</h1>
              </div>
              <a href="#about">
                {" "}
                <i
                  className="fi fi-rs-angle-down text-4xl text-[#557255] bottom-4"
                  aria-hidden="true"></i>{" "}
              </a>

              <button
                type="button"
                className="counter"
                onClick={() => setCount((count) => count + 1)}>
                Count is {count}
              </button>
            </section>
          </main>
        </div>
      </section>

      <div className="h-screen ">
        <section id="about">
          <div id="aboutMe" className="px-35 py-10">
            <h1 className="text-5xl text-left py-5">About Me</h1>
            <h1 className="text-justify text-2xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo,{" "}
            </h1>
          </div>
          <div className="px-35 py-15 text-[#557255]">
            <h1 className="text-5xl text-left">Education and Experience</h1>
            <div className="mt-10 flex w-full gap-20 flex-wrap lg:flex-nowrap ">
              <div className="min-w-0 flex-1 rounded border p-8 pt-5 text-center">
                <i className="fi fi-rs-graduation-cap text-3xl"></i>
                <h1 className="text-3xl pb-3">Education</h1>
                <h2 className="text-xl">
                  BSc in computer engineering at Kungliga Tekniska högskolan
                </h2>
              </div>
              <div className="min-w-0 flex-1 rounded border  p-8 pt-5 text-center">
                <i className="fi fi-rs-badget-check-alt text-3xl"></i>
                <h1 className="text-3xl pb-3">Experience</h1>
                <h2 className="text-xl">Frontend and backend projects</h2>
                <h2 className="text-xl">Project with John Deere</h2>
              </div>
              <div className="min-w-0 flex-1 rounded border p-8 pt-5 text-center">
                <i className="fi fi-rs-following text-3xl"></i>
                <h1 className="text-3xl pb-3">Interests</h1>
              </div>
            </div>
          </div>
          <div className=" sticky bottom-5 text-right p-10 pb-0">
            <a
              href="#home"
              className=" text-2xl">
              <i className="fi fi-rs-chevron-double-up "></i>{" "}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
