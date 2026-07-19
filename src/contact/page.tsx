import "../App.css";
import { Link } from "react-router-dom";
import closed from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/closed.png";
import { useState } from "react";
import first from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/first.png";
import second from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/second.png";
import third from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/third.png";
import fourth from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/fourth.png";
import fifth from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/fifth.png";
import sixt from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/sixt.png";
import seventh from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/seventh.png";
import eigtht from "/Users/floralindberg/Desktop/Privat/Portfolio/portfolio/src/assets/eigtht.png";



function Contact() {
  const [count, setCount] = useState(0);

  const images = [
    closed,
    first,
    second,
    third,
    fourth,
    fifth,
    sixt,
    seventh,
    eigtht,
  ];

  const increase = () => {
    if (count == images.length - 1) {
      setCount((c) => (c = -1));
    }
    setCount((c) => Math.min(c + 1, images.length - 1));
  };

  return (
    <div className="h-screen px-15 ">
      <nav className="navBar">
        <span className="text-2xl font-semibold ">FLORA LINDBERG</span>
        <div className="navLinks text-2xl font-semibold h-24">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href="">Resume</a>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div>
        <div className="text-9xl w-full">
          <div className="text-left">
            <h1 className="pb-5">GET IN </h1>
          </div>

          <div className="flex gap-70 w-full ">
            <div className="flex">
              <i className="fi fi-rs-envelope-heart text-[#557255] pr-7 pl-10 text-8xl pt-3"></i>
              <h1>TOUCH</h1>
            </div>
            <div className=" justify-center place-content-center">
              <img
                className="pb-5 justify-center pl-5"
                width={200}
                src={images[count]}
              />
              <button
                type="button"
                onClick={increase}
                className="flex text-center text-xl border rounded-xl text-[#557255] p-3.5 py-2 px-7 ">
                Open the letter
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex-col pr-30">
            <div className="flex ">
              <i className="fi fi-rs-envelope text-5xl text-[#557255]  pl-10 pr-5 "></i>
              <a
                href="mailto:floralindberg@hotmail.com"
                className="text-xl pt-3">
                floralindberg@hotmail.com
              </a>
            </div>
            <div className="flex align-bottom">
              <i className="fi fi-brands-linkedin text-6xl text-[#557255] px-10 pr-2"></i>
              <h1 className="text-xl py-4">floralindberg@hotmail.com</h1>
            </div>
            <div className="flex align-content">
              <i className="fi fi-brands-github text-5xl text-[#557255] px-10 pr-5"></i>
              <a
                href="https://github.com/floralindberg"
                className="text-xl py-2 ">
                github.com/floralindberg
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="font-mono text-sm">
        <h1 className="!important! font-mono text-center pt-10">
          Copyright
          <i className="fi fi-rs-copyright px-2 text-xs"></i>
          2026 Flora Lindberg. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Contact;
