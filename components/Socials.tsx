import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

export default function Socials ({ className, children }: { className?: string, children?: ReactNode }) {
  return (
    <div id="icons" className={`${className ?? ""} flex justify-center gap-6`}>
      {children ?? ""}
      <a target="_blank" href="https://github.com/fadiinho">
        <AiFillGithub className="cursor-pointer text-secondary hover:text-white" size="42"/>
      </a>
      <a target="_blank" href="">
        <FaDiscord className="cursor-pointer text-secondary hover:text-white" size="42"/>
      </a>
    </div>
  )
}
