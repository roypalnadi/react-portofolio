import { useState } from "react";
import Skills from "./why-me/skills";

export default function WhyMe() {
  const [whyMe, setWhyMe] = useState("experience");

  const renderWhyMe = () => {
    switch (whyMe) {
      case "experience":
        return <p>1</p>;
      case "education":
        return <p>1</p>;
      case "skills":
        return <Skills />;
      case "about me":
        return;
    }
  };

  return (
    <div className="lg:flex w-full gap-10">
      <div className="lg:w-1/4">
        <h3 className="text-3xl py-1 dark:text-space-white ">Why Hire Me ?</h3>
        <p className="text-base py-2 text-gray-800 dark:text-gray-200 mb-5">
          Learn more about my skills and expertise.
        </p>
        <div className="flex flex-col gap-3">
          <button
            className={`${
              whyMe == "experience"
                ? "bg-space-neon text-space-200"
                : "bg-space-300 text-space-white"
            } hover:bg-space-neon hover:text-space-200 py-2 border-none rounded-md w-full transition`}
            rel="noreferrer"
            target="_blank"
            onClick={() => setWhyMe("experience")}
          >
            Experience
          </button>
          <button
            className={`${
              whyMe == "education"
                ? "bg-space-neon text-space-200"
                : "bg-space-300 text-space-white"
            } hover:bg-space-neon hover:text-space-200 py-2 border-none rounded-md w-full transition`}
            rel="noreferrer"
            target="_blank"
            onClick={() => setWhyMe("education")}
          >
            Education
          </button>
          <button
            className={`${
              whyMe == "skills"
                ? "bg-space-neon text-space-200"
                : "bg-space-300 text-space-white"
            } hover:bg-space-neon hover:text-space-200 py-2 border-none rounded-md w-full transition`}
            rel="noreferrer"
            target="_blank"
            onClick={() => setWhyMe("skills")}
          >
            Skills
          </button>
          <button
            className={`${
              whyMe == "about me"
                ? "bg-space-neon text-space-200"
                : "bg-space-300 text-space-white"
            } hover:bg-space-neon hover:text-space-200 py-2 border-none rounded-md w-full transition`}
            rel="noreferrer"
            target="_blank"
            onClick={() => setWhyMe("about me")}
          >
            About Me
          </button>
        </div>
      </div>
      <div className="lg:w-3/4">{renderWhyMe()}</div>
    </div>
  );
}
