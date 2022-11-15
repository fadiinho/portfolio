import { ReactNode, useState } from "react";
import { AiFillGithub } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

const discordProfile = "Fadiinho#5739";

const Tooltip = ({ show, children, className }: { className?: string; show: boolean; children: ReactNode }) => {
  return (
    <span className={`${className} flex items-center gap-2 text-sm text-center ${show ? "visible" : "invisible" } absolute pointer-events-none bg-black rounded-lg p-1 z-10`}>
      {children}
    </span>
  )
}

export default function Socials ({ className, children }: { className?: string, children?: ReactNode }) {
  const [discordTooltip, setDiscordTooltip] = useState(false);
  const [githubTooltip, setGithubTooltip] = useState(false);

  const copyProfile = () => {
    navigator.clipboard.writeText(discordProfile);
  }

  return (
    <div id="icons" className={`${className ?? ""} flex justify-center gap-6 relative`}>
      {children ?? ""}
      <a
        onMouseEnter={() => setGithubTooltip(!githubTooltip)}
        onClick={copyProfile}
        onMouseLeave={() => setGithubTooltip(!githubTooltip)}
        target="_blank"
        rel="noreferrer"
        className="relative"
        href="https://github.com/fadiinho">
        <Tooltip className="translate-x-12 -translate-y-4" show={githubTooltip}>
          Open Github Profile
        </Tooltip>
        <AiFillGithub className="cursor-pointer text-secondary hover:text-white" size="42"/>
      </a>
      <a
        onMouseEnter={() => setDiscordTooltip(!discordTooltip)}
        onClick={copyProfile}
        onMouseLeave={() => setDiscordTooltip(!discordTooltip)}
        className="relative"
      >
        <Tooltip className="translate-x-12 -translate-y-4" show={discordTooltip}>
          Copy Discord Tag
        </Tooltip>
        <FaDiscord className="cursor-pointer text-secondary hover:text-white" size="42"/>
      </a>
    </div>
  )
}
