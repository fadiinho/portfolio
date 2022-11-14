import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Logo from "./Logo";
import Socials from "./Socials"

const Navitem = ({ href, text }: { href: string, text: string }) => {
  return (
    <li className="m-4 sm:m-0 text-4xl sm:text-2xl text-secondary hover:text-white cursor-pointer">
      <span className="text-primary">#</span>
      <Link href={href}>{text}</Link>
    </li>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 sm:px-0 w-full sm:max-w-screen-lg flex justify-between items-end">
      <h1 className="text-lg sm:text-2xl font-bold flex items-center"><Logo />Fadiinho</h1>

      <div className={`${menuOpen ? "" : "translate-x-full"} w-screen sm:w-auto py-8 sm:p-0 sm:translate-y-0 sm:translate-x-0 transition-transform translate-y-14 inset-0 bottom-auto absolute sm:static bg-background sm:flex flex-col justify-between`}>
        <ul className="w-full sm:w-fit flex flex-col sm:flex-row sm:justify-end sm:items-end sm:gap-8">
          <Navitem href="/" text="home" />
          <Navitem href="/works" text="works" />
          <Navitem href="/about-me" text="about-me" />
          <Navitem href="/contacts" text="contacts" />
        </ul>
        <Socials className="sm:hidden"/>
      </div>


      <button className="sm:hidden" onClick={() => setMenuOpen(prev => !prev)}>
        {!menuOpen && <AiOutlineMenu size={32} />}
        {menuOpen && <AiOutlineClose size={32} />}
      </button>
    </nav>
  )
}
