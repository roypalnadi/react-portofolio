import Image from "next/image";
import { FadeLeft, FadeRight } from "../fade";
import aboutImage from "../../public/about-me.png";

export default function Profile() {
  return (
    <div className="my-10">
      <div className="lg:flex gap-10 justify-between">
        <FadeLeft className="content-center">
          <div className="">
            <div className="mx-auto bg-gradient-to-b from-space-neon rounded-full w-40 h-40 relative overflow-hidden md:h-96 md:w-64">
              <Image src={aboutImage} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </FadeLeft>
        <FadeRight className="content-center">
          <div className="">
            <h3 className="text-3xl py-1 dark:text-white ">Profile</h3>
            <p className="text-base py-2 text-gray-800 dark:text-gray-200">
              Experienced in{" "}
              <strong>
                {" "}
                building, optimizing, and maintaining high-performance backend
                systems{" "}
              </strong>
              . Proficient in{" "}
              <strong>
                server-side logic, database management, API development, and
                system integration
              </strong>{" "}
              at scale. Skilled in{" "}
              <strong>debugging, testing, and performance optimization</strong>{" "}
              to ensure <em>security, efficiency, and scalability</em>. Adept at
              solving complex technical challenges and collaborating with
              cross-functional teams to deliver{" "}
              <strong>robust and innovative backend solutions</strong>. Capable
              of working <strong>independently</strong> or as part of a team to
              drive backend excellence.
            </p>
          </div>
        </FadeRight>
      </div>
      {/* <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let's make it
                  a reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={consulting} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div> */}
    </div>
  );
}
