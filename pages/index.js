import Head from "next/head";
import { useState, useRef } from "react";
import {
  VscAccount,
  VscHome,
  VscMail,
  VscProject,
  VscQuestion,
} from "react-icons/vsc";
import Particles from "../reactbits/bacgrounds/Particles/Particles";
import Dock from "../reactbits/components/Dock/Dock";
import Main from "./sections/main.js";
import Profile from "./sections/profile.js";
import WhyMe from "./sections/why-me.js";
import Collab from "./sections/collab.js";
import Project from "./sections/project.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const sectionsRef = {
    home: useRef(null),
    profile: useRef(null),
    whyMe: useRef(null),
    myProjects: useRef(null),
    collab: useRef(null),
  };

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      classNameIcon: "dark:text-white",
      onClick: () =>
        sectionsRef.home.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      classNameIcon: "dark:text-white",
      onClick: () =>
        sectionsRef.profile.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscQuestion size={18} />,
      label: "Why Hire Me ?",
      classNameIcon: "dark:text-white",
      onClick: () =>
        sectionsRef.whyMe.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscProject size={18} />,
      label: "My Projects",
      classNameIcon: "dark:text-white",
      onClick: () =>
        sectionsRef.myProjects.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscMail size={18} />,
      label: "Collab",
      classNameIcon: "dark:text-white",
      onClick: () =>
        sectionsRef.collab.current?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Roy Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        className="particles-container bg-white dark:bg-space-200"
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={600}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={200}
        alphaParticles={false}
        disableRotation={false}
      />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="border border-space-200 dark:border-space-white bg-white dark:bg-space-100 opacity-70"
      />
      <main className="px-10 md:px-20 lg:px-52">
        <section ref={sectionsRef.home} className="mb-10">
          <Main setDarkMode={setDarkMode} darkMode={darkMode} />
        </section>
        <section ref={sectionsRef.profile} className="py-10">
          <Profile />
        </section>
        <section ref={sectionsRef.whyMe} className="py-10">
          <WhyMe />
        </section>
        <section ref={sectionsRef.myProjects} className="py-10">
          <Project />
        </section>
        <section ref={sectionsRef.collab} className="py-10">
          <Collab />
        </section>
      </main>
    </div>
  );
}
