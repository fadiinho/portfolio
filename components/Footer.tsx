import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="w-full text-lg flex flex-col text-center border-t border-t-secondary">
      <div id="info" className="flex items-center justify-center flex-col gap-2 sm:flex-row sm:justify-around">
        <div>
          <div className="flex items-center justify-center"><Logo /><span className="font-bold">Fadiinho</span> <span className="mx-4 text-secondary">ffadiinho@gmail.com</span></div>
          <p className="font-light">Fullstack developer living in Brazil</p>
        </div>
        <div className="flex flex-col">
          <p className="my-2 font-semibold grow">Media</p>
          <Socials />
        </div>
      </div>
      <div className="m-8 text-secondary">&copy; Copyright 2022. Designed by 
        <a className="m-1 text-primary underline cursor-pointer" href="https://www.figma.com/@elias_dev">Elias</a>
        <span className="text-primary">&hearts;</span>
      </div>
    </footer>
  )
}
