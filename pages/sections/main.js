import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import BlurText from "../../reactbits/textAnimations/BlurText/BlurText";
import DecryptedText from "../../reactbits/textAnimations/DecryptedText/DecryptedText";
import SplitText from "../../reactbits/textAnimations/SplitText/SplitText";
import RotatingText from "../../reactbits/textAnimations/RotatingText/RotatingText";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";

export default function Main({ setDarkMode, darkMode }) {
  return (
    <>
      <nav className="py-10 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">Portofolio</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-space-neon text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="https://resume.io/r/aMV5fP6jr"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="lg:flex text-center md:text-start py-4 lg:py-10">
        <div className="content-center">
          <BlurText
            text="Software Developer."
            delay={150}
            animateBy="words"
            direction="top"
            className="justify-center text-2xl py-1 dark:text-white md:text-3xl"
          />

          <SplitText
            text="Roy Palnadi Pebruar"
            className="text-5xl py-2 text-space-neon font-medium md:text-6xl"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <p className="text-base py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            <DecryptedText
              text="Bringing your ideas to life with top-notch programming services.
                            Join me below, and let’s make it happen!"
              animateOn="view"
            />
          </p>
          <div className="text-5xl flex justify-center gap-10 lg:gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              target="_blank"
              href="https://www.facebook.com/roypalnadi.pebruar.9"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/roy-palnadi-pebruar-8b621b138/"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/roypalnadi"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="mx-auto bg-gradient-to-b from-space-neon rounded-full w-40 h-40 relative overflow-hidden md:h-80 md:w-80">
          <Image src={deved} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <div className="flex rotating-text-ptag text-md lg:text-3xl justify-center">
        <span className="text-gray-800 dark:text-gray-200">Soft Skills</span>
        <RotatingText
          texts={[
            "Fast Learner",
            "Problem Solving",
            "Teamwork",
            "Analytical Thinking",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 dark:text-gray-800 text-gray-200 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </>
  );
}
