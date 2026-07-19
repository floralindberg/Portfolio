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

function Projects() {
  return (
    <div className="h-screen px-15">
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

        <div className="p-5">
          <div className="flex gap-20 border rounded-xl p-5 w-fit">
            <Dialog>
              <DialogTrigger>Melody mapper</DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl">Melody Mapper</DialogTitle>
                  <DialogDescription className="text-xl">
                    This project was created in the course DH2642{" "}
                    <p className="italic">
                      Interaction Programming and the Dynamic Web
                    </p>{" "}
                    at KTH. Melody Mapper is a game where players guess an
                    artist's origin by listening to one of their top songs on
                    Spotify. As the song plays, a world map is displayed for the
                    player to move a pin on the guessed location. Scores are
                    calculated based on the distance between the guessed pin and
                    the actual origin.
                  </DialogDescription>
                  <DialogDescription className="text-xl pb-3">
                    Unfortunately the web application is no longer deployed, but
                    can be found on GitHub.
                  </DialogDescription>
                  <a
                    href="https://github.com/floralindberg/Melody_Mapper"
                    className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                    <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                    <p className="pt-1 text-[#faf7f1] text-left" >View on GitHub</p>
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
