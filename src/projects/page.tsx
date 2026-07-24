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
import melodymapper from "/src/assets/MelodyMapper.png";
import report from "/src/assets/JohnDeereChallenge.pdf";
import johndeere from "/src/assets/johndeere.png";
import construction from "/src/assets/construction.png";

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

function Projects() {
  return (
    <div className="xl:h-screen px-15 bg-[#faf7f1] flex flex-col">
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
        <div>
          <h1 className="text-7xl lg:pt-0 pt-10">My Projects</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center  ">
        <div className="p-5 flex flex-col gap-15 justify-center pt-10 place-items-center content-center 2xl:flex-row">
          <div className="flex gap-20 border-3 border-[#587258] rounded-xl p-5 w-fit hover:bg-[#f3ecde] hover:scale-105 transition-transform duration-300">
            <Dialog>
              <DialogTrigger>
                {" "}
                <img src={melodymapper} width={450}></img>
                <p className="font-bold pt-5 text-2xl text-[#587258]">
                  Melody Mapper
                </p>{" "}
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-md  md:min-w-2xl lg:min-w-3xl xl:min-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-extrabold text-[#587258] text-2xl ">
                    MelodyMapper
                  </DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 text-[#587258]">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <p key={index} className="mb-4 leading-normal  text-xl">
                      <p>
                        This project was created in the course DH2642{" "}
                        <span className="italic">
                          Interaction Programming and the Dynamic Web
                        </span>{" "}
                        at KTH. Melody Mapper is a game where players guess an
                        artist's origin by listening to one of their top songs
                        on Spotify. As the song plays, a world map is displayed
                        for the player to move a pin on the guessed location.
                        Scores are calculated based on the distance between the
                        guessed pin and the actual origin.
                      </p>
                      <p className="py-5">
                        Unfortunately the web application is no longer deployed,
                        but can be found on GitHub.
                      </p>
                      <div className="p-5  ">
                        <h1 className="font-extrabold  text-3xl text-center pb-8">
                          Tech Stack
                        </h1>
                        <div className="flex gap-8 items-center flex-wrap justify-center">
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Vite</title>
                              <path
                                fill="currentColor"
                                d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"
                              />
                            </svg>
                            <p>Vite</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>React</title>
                              <path
                                fill="currentColor"
                                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                              />
                            </svg>{" "}
                            <p>React</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            {" "}
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 items-center">
                              <title>Tailwind CSS</title>
                              <path
                                fill="currentColor"
                                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                              />
                            </svg>
                            <p>Tailwind CSS</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            {" "}
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>shadcn/ui</title>
                              <path
                                fill="currentColor"
                                d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z"
                              />
                            </svg>
                            <p>shadcn/ui</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            {" "}
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Firebase</title>
                              <path
                                fill="currentColor"
                                d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"
                              />
                            </svg>
                            <p>Firebase</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Google Maps</title>
                              <path
                                fill="currentColor"
                                d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"
                              />
                            </svg>
                            <p>Google Maps API</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Spotify</title>
                              <path
                                fill="currentColor"
                                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                              />
                            </svg>
                            <p>Spotify API</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Wikidata</title>
                              <path
                                fill="currentColor"
                                d="M0 4.583v14.833h.865V4.583zm1.788 0v14.833h2.653V4.583zm3.518 0v14.832H7.96V4.583zm3.547 0v14.834h.866V4.583zm1.789 0v14.833h.865V4.583zm1.759 0v14.834h2.653V4.583zm3.518 0v14.834h.923V4.583zm1.788 0v14.833h2.653V4.583zm3.64 0v14.834h.865V4.583zm1.788 0v14.834H24V4.583Z"
                              />
                            </svg>
                            <p>Wikidata API</p>
                          </div>
                        </div>
                      </div>
                      <a
                        tabIndex={-1}
                        href="https://github.com/floralindberg/Melody_Mapper"
                        className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                        <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                        <p className="pt-1 text-[#faf7f1] text-left">
                          View on GitHub
                        </p>
                      </a>
                    </p>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-20 border-3 border-[#587258] rounded-xl p-5 w-fit hover:bg-[#f3ecde] hover:scale-105 transition-transform duration-300">
            <Dialog>
              <DialogTrigger>
                <img src={construction} width={450} className="mt-5"></img>
                <p className="font-extrabold pt-5 text-[#587258] text-2xl ">
                  DIF Betting
                </p>
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-md  md:min-w-2xl lg:min-w-3xl xl:min-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-extrabold text-[#587258] text-2xl ">
                    DIF Betting
                  </DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 text-[#587258] text-xl">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <p key={index} className="mb-4 leading-normal">
                      <p className="pb-5">
                        A side project still under development. The project is a
                        PWA for casual friendly betting on Djurgården's hockey
                        games in SHL, created just for fun. Game schedules and
                        results are pulled via web scraping. Points and users
                        are stored in a custome-made database.
                      </p>
                      <div className="p-5  ">
                        <h1 className="font-extrabold  text-3xl text-center pb-8">
                          Tech Stack
                        </h1>
                        <div className="flex gap-8 items-center flex-wrap justify-center">
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Vite</title>
                              <path
                                fill="currentColor"
                                d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"
                              />
                            </svg>
                            <p>Vite</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>React</title>
                              <path
                                fill="currentColor"
                                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                              />
                            </svg>{" "}
                            <p>React</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            {" "}
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 items-center">
                              <title>Tailwind CSS</title>
                              <path
                                fill="currentColor"
                                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                              />
                            </svg>
                            <p>Tailwind CSS</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            {" "}
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>shadcn/ui</title>
                              <path
                                fill="currentColor"
                                d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z"
                              />
                            </svg>
                            <p>shadcn/ui</p>
                          </div>
                        </div>
                      </div>
                      <a
                        tabIndex={-1}
                        href="https://github.com/floralindberg/DIFBetting"
                        className="border rounded-xl bg-[#a5ada5] py-3   hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                        <i className="fi fi-brands-github text-3xl text-[#faf7f1] align-center pr-3 "></i>
                        <p className="pt-1 text-[#faf7f1] text-left">
                          View on GitHub
                        </p>
                      </a>
                    </p>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-20 border-3 border-[#587258] rounded-xl p-5 w-fit hover:bg-[#f3ecde] hover:scale-105 transition-transform duration-300 ">
            <Dialog>
              <DialogTrigger>
                <img src={johndeere} width={450} className=""></img>
                <p className="font-extrabold pt-5 text-[#587258] text-2xl ">
                  AgroCamino with John Deere
                </p>
              </DialogTrigger>

              <DialogContent className="w-[90vw] max-w-md  md:min-w-2xl lg:min-w-3xl xl:min-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-extrabold  text-[#587258] text-2xl ">
                    AgroCamino with John Deere
                  </DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 ">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <div className="text-[#587258] text-xl ">
                      <div>
                        <p key={index} className="mb-4 leading-normal">
                          This project was created in the course{" "}
                          <span className=" italic w-fit">
                            Design of Advanced Embedded Systems{" "}
                          </span>{" "}
                          at Technológico de Monterrey (ITESM) developed
                          together with the company John Deere, built from
                          scratch. AgroCamino was imagined with a simple vision:
                          to make precision farming more accessible to small and
                          medium farmers in Mexico.
                        </p>
                        <p className="pt-5">
                          {" "}
                          The product itself is built around a microcontroller
                          (STM32) that acts as the brain of the system. It
                          connects to a GNSS RTK module for precise positioning,
                          an IMU to understand orientation, and LiDAR or
                          ultrasonic sensors to detect obstacles. The tractor’s
                          movement is controlled with a motor encoder and
                          CAN/J1939 communication, while an ESP32 handles Wi-Fi
                          links with a mobile app. This allows a farmer to
                          simply set field waypoints on the app, then let the
                          tractor follow the route safely and reliably while
                          monitoring its progress in real time.
                        </p>{" "}
                        <p className="py-5">
                          Due to confidentiality the project is not available on
                          GitHub, but the report is available through the link
                          below.
                        </p>
                      </div>
                      <div className="p-5  ">
                        <h1 className="font-extrabold  text-3xl text-center pb-8">
                          Tech Stack
                        </h1>
                        <div className="flex gap-8 items-center flex-wrap justify-center">
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              fill="#587258"
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>STMicroelectronics</title>
                              <path
                                fill="currentColor"
                                d="M 23.818 5.61 L 6.402 5.61 C 5.125 5.609 3.968 6.362 3.452 7.529 L 0.014 15.811 C -0.036 15.931 0.052 16.063 0.182 16.061 L 8.046 16.061 C 8.601 16.061 8.848 15.523 8.412 15.093 L 5.524 12.388 C 4.008 10.9 4.658 7.45 7.81 7.45 L 23.206 7.45 C 23.283 7.451 23.352 7.402 23.378 7.329 L 23.987 5.857 C 23.996 5.835 24.001 5.811 24 5.787 C 23.997 5.689 23.917 5.61 23.818 5.61 M 22.082 9.826 L 19.126 9.826 C 18.932 9.825 18.756 9.94 18.681 10.118 L 15.369 18.118 C 15.355 18.144 15.347 18.173 15.347 18.202 C 15.348 18.302 15.429 18.383 15.529 18.381 L 16.632 18.381 C 17.93 18.387 19.105 17.613 19.612 16.418 L 22.244 10.063 C 22.252 10.042 22.257 10.019 22.257 9.996 C 22.253 9.902 22.176 9.828 22.082 9.826 M 16.271 10.005 C 16.271 9.905 16.189 9.825 16.089 9.825 L 7.706 9.825 C 7.251 9.825 6.853 10.38 7.335 10.825 L 10.104 13.404 C 10.104 13.404 11.224 14.437 10.984 15.916 C 10.778 17.219 9.889 18.016 9.241 18.302 C 9.208 18.31 9.196 18.351 9.219 18.376 C 9.23 18.387 9.246 18.392 9.261 18.388 L 12.489 18.388 C 12.683 18.39 12.859 18.275 12.934 18.095 L 16.256 10.068 C 16.266 10.049 16.271 10.027 16.271 10.005"
                              />
                            </svg>
                            <p>STMicroelectronics</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              fill="#587258"
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>ESPHome</title>
                              <path d="M7.253 2.755c-.676 0-1.231.555-1.231 1.232v.976h-.083a.722.722 0 00-.717.716v11.682H.71v-.57h3.544a.355.355 0 00.354-.354v-1.279a.355.355 0 00-.354-.355H.709v-.565h3.544a.355.355 0 00.354-.355v-1.278a.355.355 0 00-.354-.355H.709v-.569h3.544a.355.355 0 00.354-.355V10.05a.355.355 0 00-.354-.354H.709V6.113a.355.355 0 00-.355-.355.355.355 0 00-.354.355v3.937a.355.355 0 00.354.355h3.544v.566H.354a.355.355 0 00-.354.355v1.279a.355.355 0 00.354.354h3.544v.57H.354a.355.355 0 00-.354.354v1.275a.355.355 0 00.354.355h3.544v.57H.354a.355.355 0 00-.354.354v1.278a.355.355 0 00.354.355h4.868v.086c0 .389.323.716.717.716h.083v1.14c0 .677.555 1.233 1.231 1.233.677 0 1.233-.556 1.233-1.232v-1.14h.477v1.137c0 .676.556 1.232 1.232 1.232.677 0 1.232-.556 1.232-1.232v-1.138h.481v1.138c0 .676.556 1.232 1.232 1.232.676 0 1.233-.556 1.233-1.232v-1.138h.48v1.138c0 .676.556 1.232 1.232 1.232.677 0 1.232-.556 1.232-1.232v-1.138h.481v1.138c0 .676.556 1.232 1.232 1.232.676 0 1.233-.556 1.233-1.232v-1.138h.477v1.138c0 .676.555 1.232 1.231 1.232.677 0 1.233-.556 1.233-1.232v-1.138h.079c.39 0 .717-.323.717-.716V5.679a.723.723 0 00-.714-.716h-.082v-.979c0-.676-.556-1.231-1.232-1.23h-.001c-.676.001-1.231.557-1.231 1.233v.976h-.477v-.98c0-.675-.557-1.23-1.233-1.228h-.001c-.676 0-1.23.556-1.23 1.232v.976h-.482v-.976c0-.677-.555-1.232-1.232-1.232-.676 0-1.232.555-1.232 1.232v.976h-.48v-.976c0-.677-.557-1.232-1.233-1.232s-1.232.555-1.232 1.232v.976h-.48v-.976c0-.677-.556-1.232-1.233-1.232-.676 0-1.232.555-1.232 1.232v.976h-.477v-.976c0-.677-.556-1.232-1.233-1.232zm0 .715a.51.51 0 01.517.517v.976H6.737v-.976a.51.51 0 01.516-.517zm2.942 0a.51.51 0 01.517.517v.976H9.679v-.976a.51.51 0 01.516-.517zm2.945 0a.51.51 0 01.516.517v.976h-1.032v-.976a.51.51 0 01.516-.517zm2.945 0a.51.51 0 01.517.517v.976h-1.033v-.976a.51.51 0 01.516-.517zm2.945 0h.001a.507.507 0 01.515.513v.98h-1.032v-.976a.51.51 0 01.516-.517zm2.942.001h.001a.507.507 0 01.515.513v.979h-1.032v-.976a.51.51 0 01.516-.516zM6.018 5.758h17.186v12.319H6.018zm8.63 2.777a.322.322 0 00-.234.095l-3.776 3.78a.322.322 0 00.228.55h.62v2.225a.322.322 0 00.323.322h5.67a.322.322 0 00.322-.322V12.96h.621a.322.322 0 00.228-.55l-.856-.859v-1.533a.322.322 0 00-.322-.323h-.591a.322.322 0 00-.323.323v.3L14.87 8.63a.322.322 0 00-.221-.095zm-7.91 10.337H7.77v1.14a.51.51 0 01-.517.517.51.51 0 01-.516-.516zm2.94 0h1.034v1.138a.51.51 0 01-.517.516.51.51 0 01-.516-.516zm2.946 0h1.032v1.138a.51.51 0 01-.516.516.51.51 0 01-.516-.516zm2.945 0h1.033v1.138a.51.51 0 01-.517.516.51.51 0 01-.516-.516zm2.945 0h1.032v1.138a.51.51 0 01-.516.516.51.51 0 01-.516-.516zm2.941 0h1.033v1.138a.51.51 0 01-.517.516.51.51 0 01-.516-.516z" />
                            </svg>
                            <p>ESP32</p>
                          </div>

                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>C</title>
                              <path
                                fill="currentColor"
                                d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"
                              />
                            </svg>
                            <p>C</p>
                          </div>
                          <div className=" flex flex-col justify justify-center items-center">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5">
                              <title>Arduino</title>
                              <path
                                fill="currentColor"
                                d="M18.087 6.146c-.3 0-.607.017-.907.069-2.532.367-4.23 2.239-5.18 3.674-.95-1.435-2.648-3.307-5.18-3.674a6.49 6.49 0 0 0-.907-.069C2.648 6.146 0 8.77 0 12s2.656 5.854 5.913 5.854c.3 0 .607-.017.916-.069 2.531-.376 4.23-2.247 5.18-3.683.949 1.436 2.647 3.307 5.18 3.683.299.043.607.069.915.069C21.344 17.854 24 15.23 24 12s-2.656-5.854-5.913-5.854zM6.53 15.734a3.837 3.837 0 0 1-.625.043c-2.148 0-3.889-1.7-3.889-3.777 0-2.085 1.749-3.777 3.898-3.777.208 0 .416.017.624.043 2.39.35 3.847 2.768 4.347 3.734-.508.974-1.974 3.384-4.355 3.734zm11.558.043c-.208 0-.416-.017-.624-.043-2.39-.35-3.856-2.768-4.347-3.734.491-.966 1.957-3.384 4.347-3.734.208-.026.416-.043.624-.043 2.149 0 3.89 1.7 3.89 3.777 0 2.085-1.75 3.777-3.89 3.777zm1.65-4.404v1.134h-1.205v1.182h-1.156v-1.182H16.17v-1.134h1.206V10.19h1.156v1.183h1.206zM4.246 12.498H7.82v-1.125H4.245v1.125z"
                              />
                            </svg>
                            <p>ArduinoIDE</p>
                          </div>
                        </div>
                      </div>
                      <a
                        href="/src/assets/JohnDeereChallenge.pdf"
                        tabIndex={-1}
                        className="border rounded-xl bg-[#a5ada5] py-3  hover:bg-[#587258] text-xl font-bold text-[#faf7f1] flex justify-center gap-2">
                        <i className="fi fi-rs-file-pdf  text-3xl text-[#faf7f1] align-center pr-3 "></i>
                        <p className="pt-1 text-[#faf7f1] text-left">
                          View report as PDF
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
                <div></div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="font-mono text-sm 2xl:absolute 2xl:bottom-5 pb-5 w-full ">
          <h1 className="!important! font-mono text-center pt-10">
            Copyright
            <i className="fi fi-rs-copyright px-2 text-xs"></i>
            2026 Flora Lindberg. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
