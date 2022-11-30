import Link from "next/link";

import { ReactNode, useEffect, useState } from "react";

import Logo from "./Logo";
import Socials from "./Socials"
import { AiOutlineMenu, AiOutlineClose, AiOutlineCrown } from "react-icons/ai"
import { useSession } from "next-auth/react";

export const Navitem = ({ href, children }: { href: string, children: ReactNode }) => {
  return (
    <li className="m-4 sm:m-0 text-4xl sm:text-2xl text-secondary hover:text-white cursor-pointer">
      <Link tabIndex={-1} href={href} className="flex items-center">
        {typeof children === "string" && (
          <span className="text-primary">#</span>
        )}

        {children}
      </Link>
    </li>
  )
}

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 sm:px-0 w-full sm:max-w-screen-lg flex justify-between items-end">
      <h1 className="text-lg sm:text-2xl font-bold flex items-center"><Logo />Fadiinho</h1>

      <div 
        className={`${menuOpen ? "" : "translate-x-full opacity-0"} sm:opacity-100 w-screen sm:w-auto py-8 sm:p-0 sm:translate-y-0 sm:translate-x-0 transition-all translate-y-14 inset-0 bottom-auto absolute sm:static bg-background sm:flex flex-col justify-between z-10`}
        onClick={() => setMenuOpen(false)}
      >
        <ul 
          className="w-full sm:w-fit flex flex-col sm:flex-row sm:justify-end sm:items-end sm:gap-8">
          <Navitem href="/">home</Navitem>
          <Navitem href="/projects">projects</Navitem>
          <Navitem href="/about-me">about-me</Navitem>
          <Navitem href="/contacts">contacts</Navitem>
          { session?.user.role === "admin" && (
            <Navitem href="/dashboard">
              <AiOutlineCrown size="28" />
            </Navitem>
          )}
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
