import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import Tooltip from "./Tooltip";

export const discordProfile = "Fadiinho#5739";
export const githubProfile = "https://github.com/fadiinho";

export default function Socials ({ className, children }: { className?: string, children?: ReactNode; }) {
  const copyProfile = () => {
    navigator.clipboard.writeText(discordProfile);
  }

  return (
    <div id="icons" className={`${className ?? ""} flex justify-center gap-6`}>
      {children ?? ""}
      <Tooltip text="Open Github Profile" className="translate-x-12 -translate-y-4">
        <a
          tabIndex={-1}
          onClick={copyProfile}
          target="_blank"
          rel="noreferrer"
          href={githubProfile}>
          <AiFillGithub
            tabIndex={-1}
            className="cursor-pointer text-secondary hover:text-white"
            size="42"
          />
        </a>
      </Tooltip>
      <Tooltip text="Copy Discord Tag" className="translate-x-12 -translate-y-4">
        <a
          tabIndex={-1}
          target="_blank"
          rel="noreferrer"
          onClick={copyProfile}
        >
          <FaDiscord
            tabIndex={-1}
            className="cursor-pointer text-secondary hover:text-white"
            size="42"
          />
        </a>
      </Tooltip>
    </div>
  )
}
