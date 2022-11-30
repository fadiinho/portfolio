import Head from "next/head";
import SubTitle from "@components/SubTitle";
import Tooltip from "@components/Tooltip";
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaTwitch } from "react-icons/fa";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <main className="px-2 w-full m-4 sm:m-0 sm:max-w-screen-lg flex flex-col gap-4">
        <section>
          <SubTitle titleChar="/" >contacts</SubTitle>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start sm:gap-0">
            <p className="text-secondary">
              I&apos;m interested in any freelance opportunities.
              Don&apos;t hesitate to contact me.
            </p>
            <div className="p-2 border border-secondary border-opacity-50 rounded">
              <p className="font-semibold">Message me here</p>
              <Tooltip
                onClick={() => navigator.clipboard.writeText("ffadiinho@gmail.com") }
                text="Copy Email">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <AiOutlineMail className="text-secondary hover:text-white cursor-pointer" size="32"/>
                  ffadiinho@gmail.com
                </div>
              </Tooltip>

              <Tooltip
                onClick={() => navigator.clipboard.writeText("Fadiinho#5739") }
                text="Copy Discord Tag">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <FaDiscord className="text-secondary hover:text-white cursor-pointer" size="32"/>
                  Fadiinho#5739
                </div>
              </Tooltip>
            </div>
          </div>
        </section>

        <section>
          <SubTitle>all-my-media</SubTitle>
          <div className="flex gap-4 flex-wrap">
            <Tooltip
              text="Open Twitter Profile"
            >
              <a href="https://twitter.com/fadiinho_">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <FaTwitter className="text-secondary hover:text-white cursor-pointer" size="30"/>
                  @fadiinho_
                </div>
              </a>
            </Tooltip>

            <Tooltip
              text="Open Twitch Profile"
            >
              <a href="https://twitch.com/fadiinho">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <FaTwitch className="text-secondary hover:text-white cursor-pointer" size="30"/>
                  @fadiinho
                </div>
              </a>
            </Tooltip>
              <Tooltip
                onClick={() => navigator.clipboard.writeText("Fadiinho#5739") }
                text="Copy Discord Tag"
              >
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <FaDiscord className="text-secondary hover:text-white cursor-pointer" size="30"/>
                  Fadiinho#5739
                </div>
              </Tooltip>
          </div>
        </section>
      </main>
    </>
  )
}

