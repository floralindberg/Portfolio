import "../App.css";
import { Link } from "react-router-dom";
import closed from "/src/assets/letter/closed.png";
import { useState } from "react";
import first from "/src/assets/letter/first.png";
import second from "/src/assets/letter/second.png";
import third from "/src/assets/letter/third.png";
import fourth from "/src/assets/letter/fourth.png";
import fifth from "/src/assets/letter/fifth.png";
import sixt from "/src/assets/letter/sixt.png";
import seventh from "/src/assets/letter/seventh.png";
import eigtht from "/src/assets/letter/eigtht.png";

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
    <div className="h-screen pl-10 pr-15 lg:px-15 bg-[#faf7f1]">
      <nav className="navBar pt-5 lg:pt-0">
        {" "}
        <span className="text-2xl font-semibold">FLORA LINDBERG</span>
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
          <DropdownMenuContent className=" hover:bg-accent hover:text-accent-foreground text-[#587258] font-bold bg-[#faf7f1]">
            <DropdownMenuItem className="">
              <a href="/">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/projects">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/src/assets/resume.pdf">Resume</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/contact">Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <div>
        <div className=" text-6xl lg:text-9xl w-full">
          <div className="text-left">
            <h1 className="pb-5 lg:pt-0 pt-15">GET IN </h1>
          </div>

          <div className="flex lg:gap-70 w-full">
            <div className="flex">
              <i className="fi fi-rs-envelope-heart text-[#557255] pr-7 lg:pl-10 text-4xl lg:text-8xl pt-3"></i>
              <h1>TOUCH</h1>
            </div>
            <div className=" justify-center place-content-center hidden md:flex md:flex-col">
              <img
                className="pb-5 justify-center pl-5"
                width={200}
                src={images[count]}
              />
              <button
                type="button"
                onClick={increase}
                className="flex text-center text-xl border-3 border-[#557255] rounded-xl text-[#557255] p-3.5 py-2 px-7 ">
                Open the letter
              </button>
            </div>
          </div>
        </div>

        <div className="flex lg:pt-0 pt-10">
          <div className="flex-col pr-30">
            <div className="flex ">
              <i className="fi fi-rs-envelope text-5xl text-[#557255]  lg:pl-10 pr-5 "></i>
              <a
                href="mailto:floralindberg@hotmail.com"
                className="text-xl pt-3 text-[#587258]">
                floralindberg@hotmail.com
              </a>
            </div>
            <div className="flex align-bottom">
              <i className="fi fi-brands-linkedin text-6xl text-[#557255] lg:px-10 pr-2"></i>
              <h1 className="text-xl py-4">floralindberg@hotmail.com</h1>
            </div>
            <div className="flex align-content">
              <i className="fi fi-brands-github text-5xl text-[#557255] lg:px-10 pr-5"></i>
              <a
                href="https://github.com/floralindberg"
                className="text-xl py-2 text-[#587258]">
                github.com/floralindberg
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="font-mono text-sm absolute bottom-5 pb-5 lg:w-full pr-10">
        <h1 className="!important! font-mono text-center">
          Copyright
          <i className="fi fi-rs-copyright px-2 text-xs"></i>
          2026 Flora Lindberg. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Contact;
