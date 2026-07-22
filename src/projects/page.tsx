import "../App.css";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@base-ui/react";
import melodymapper from "/src/assets/MelodyMapper.png";
import construction from "/src/assets/construction.png";

function Projects() {
  return (
    <div className="h-screen px-15 bg-[#faf7f1]">
      <nav className="navBar">
        <span className="text-2xl font-semibold ">FLORA LINDBERG</span>
        <div className="navLinks text-2xl font-semibold h-24">
          <a href="/">Home</a>
          <Link to="/projects">Projects</Link>
          <a href="">Resume</a>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div>
        <div>
          <h1 className="text-7xl">My Projects</h1>
        </div>

        <div className="p-5 flex gap-10">
          <div className="flex gap-20 border-2 border-[#587258] rounded-xl p-5 w-fit hover:border-4 hover:bg-[#f3ecde]">
            <Dialog>
              <DialogTrigger>
                <img src={melodymapper} width={450}></img>
                <p className="font-bold pt-5 text-2xl text-[#587258]">
                  Melody Mapper
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl text-[#587258]">
                <DialogHeader>
                  <DialogTitle className="text-3xl">Melody Mapper</DialogTitle>
                  <div className=" text-[#587258]">
                    <DialogDescription className="text-xl font-bold text-[#587258]">
                      This project was created in the course DH2642{" "}
                      <span className="italic">
                        Interaction Programming and the Dynamic Web
                      </span>{" "}
                      at KTH. Melody Mapper is a game where players guess an
                      artist's origin by listening to one of their top songs on
                      Spotify. As the song plays, a world map is displayed for
                      the player to move a pin on the guessed location. Scores
                      are calculated based on the distance between the guessed
                      pin and the actual origin.
                    </DialogDescription>
                    <DialogDescription className="text-xl py-5 font-bold text-[#587258]">
                      Unfortunately the web application is no longer deployed,
                      but can be found on GitHub.
                    </DialogDescription>
                  </div>

                  <a
                    href="https://github.com/floralindberg/Melody_Mapper"
                    className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                    <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                    <p className="pt-1 text-[#faf7f1] text-left">
                      View on GitHub
                    </p>
                  </a>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-20 border-2 border-[#587258] rounded-xl p-5 w-fit hover:border-4 hover:bg-[#f3ecde]">
            <Dialog>
              <DialogTrigger>
                <i className="fi fi-rs-tools text-[#587258] text-6xl"></i>
                <p className="font-extrabold pt-5 text-[#587258] text-2xl">
                  DIF Betting
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl">DIF Betting</DialogTitle>
                  <DialogDescription className="text-xl font-bold text-[#587258]">
                    A side project still under development. The project is a PWA
                    for casual friendly betting on Djurgården's hockey games in
                    SHL, created just for fun. Game schedules and results are
                    pulled via web scraping since no free SHL API is available.
                    Points and users are stored in a custome-made database.
                  </DialogDescription>
                  <a
                    href="https://github.com/floralindberg/SHLBetting"
                    className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                    <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                    <p className="pt-1 text-[#faf7f1] text-left">
                      View on GitHub
                    </p>
                  </a>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-20 border-2 border-[#587258] rounded-xl p-5 w-fit hover:border-4 hover:bg-[#f3ecde]">
            <Dialog>
              <DialogTrigger>
                <p className="font-extrabold pt-5 text-[#587258] text-2xl">
                  AgroCamino with John Deere
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl">
                    AgroCamino with John Deere
                  </DialogTitle>
                  <DialogDescription className="text-xl font-bold text-[#587258] ">
                    This project was created in the course{" "}
                    <span className=" italic w-fit">
                      Design of Advanced Embedded Systems{" "}
                    </span>{" "}
                    at Technológico de Monterrey (ITESM) developed together with
                    the company John Deere, built from scratch. AgroCamino was
                    imagined with a simple vision: to make precision farming
                    more accessible to small and medium farmers in Mexico.
                    Instead of being a high-end technology reserved only for
                    large industrial farms, the goal was to create an affordable
                    tool that helps farmers work more efficiently, reduce waste,
                    and ultimately make their daily tasks less exhausting.
                  </DialogDescription>
                  <DialogDescription className="text-xl font-bold text-[#587258] pt-5">
                    {" "}
                    The product itself is built around a microcontroller (STM32)
                    that acts as the brain of the system. It connects to a GNSS
                    RTK module for precise positioning, an IMU to understand
                    orientation, and LiDAR or ultrasonic sensors to detect
                    obstacles. The tractor’s movement is controlled with a motor
                    encoder and CAN/J1939 communication, while an ESP32 handles
                    Wi-Fi links with a mobile app. This allows a farmer to
                    simply set field waypoints on the app, then let the tractor
                    follow the route safely and reliably while monitoring its
                    progress in real time.
                  </DialogDescription>
                  <DialogDescription className="py-5 text-xl text-[#587258] font-bold ">
                    Due to confidentiality the project is not available on
                    GitHub, but the report is available through the link below.
                  </DialogDescription>

                  <a
                    href="https://github.com/floralindberg/SHLBetting"
                    className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                    <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                    <p className="pt-1 text-[#faf7f1] text-left">
                      View on GitHub
                    </p>
                  </a>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
