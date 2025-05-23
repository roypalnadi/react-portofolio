import {
  AiOutlineCloudServer,
  AiOutlineLaptop,
  AiOutlineLayout,
  AiOutlineLink,
} from "react-icons/ai";
import BoxProfile from "../component/box-profile";
import { FadeLeft } from "../fade";

export default function Profile() {
  return (
    <div className="my-10">
      <div className="lg:flex gap-14 justify-between items-start">
        {/* <FadeLeft className="content-center">
          <div className="">
            <div className="mx-auto bg-gradient-to-b from-space-neon rounded-full w-40 h-40 relative overflow-hidden md:h-96 md:w-64">
              <Image src={aboutImage} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </FadeLeft> */}
        <FadeLeft className="content-center flex-1">
          <div className="">
            <h3 className="text-3xl py-1 dark:text-white font-semibold">
              About <span className="text-space-neon">Me</span>
            </h3>
            <p className="text-sm py-2 text-gray-800 dark:text-gray-200">
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
        </FadeLeft>
        <div className="flex-1 flex flex-col gap-5">
          <BoxProfile
            firstTitle={"Web Development"}
            secondTitle={
              "Building interactive UIs with modern JavaScript frameworks."
            }
            icon={<AiOutlineLaptop size={25} className="text-space-neon" />}
          />
          <BoxProfile
            firstTitle={"Backend Development"}
            secondTitle={
              "Designing and developing robust server-side logic, databases, and APIs to power web applications."
            }
            icon={
              <AiOutlineCloudServer size={25} className="text-space-neon" />
            }
          />
          <BoxProfile
            firstTitle={"API Integration"}
            secondTitle={
              "Connecting and managing external services and data sources."
            }
            icon={<AiOutlineLink size={25} className="text-space-neon" />}
          />
        </div>
      </div>
    </div>
  );
}
