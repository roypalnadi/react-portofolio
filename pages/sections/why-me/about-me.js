import Box from "../../component/box";
import { FadeLeft } from "../../fade";

export default function AboutMe() {
  return (
    <>
      <div>
        <FadeLeft>
          <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
            About Me
          </h3>
          <p className="text-base py-2 text-gray-800 dark:text-gray-200">
            Passionate about technology and innovation, I thrive on solving
            complex problems and continuously expanding my skills through
            hands-on experience and learning.
          </p>
        </FadeLeft>
      </div>
      <div className="">
        <div className="border border-space-200 dark:border-space-white bg-white dark:bg-space-200 rounded-md py-4 px-6 flex flex-col sm:grid sm:grid-cols-2 gap-1">
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Name
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              Roy Palnadi Pebruar
            </span>
          </div>
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Phone
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              (+62) 819 0710 2428
            </span>
          </div>
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Experience
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              5+ Years
            </span>
          </div>
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Email
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              revannaldi45@gmail.com
            </span>
          </div>
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Nationality
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              Indonesia
            </span>
          </div>
          <div className="flex gap-5">
            <p className="text-xs text-gray-800 dark:text-gray-200 content-center">
              Freelance
            </p>
            <span className="text-space-neon font-semibold text-sm content-center">
              Available
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
