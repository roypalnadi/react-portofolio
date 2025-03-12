import Box from "../../component/box";
import { FadeLeft } from "../../fade";

export default function Experience() {
  return (
    <>
      <div>
        <FadeLeft>
          <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
            My Experience
          </h3>
          <p className="text-base py-2 text-gray-800 dark:text-gray-200">
            A versatile developer who constantly explores, masters various
            technologies, and always finds innovative solutions to every
            challenge faced.
          </p>
        </FadeLeft>
      </div>
      <div className="flex flex-col lg:grid xl:grid-cols-2 gap-4">
        <Box
          firstTitle={"July 2020 - Present"}
          secondTitle={"PT. Qelopak Teknologi Indonesia"}
          thridTitle={"Backend Developer"}
        />
        <Box
          firstTitle={"August 2018 - November 2018"}
          secondTitle={"PT. Muda Bogor Berkreasi (Bogor, Internship)"}
          thridTitle={"Staff IT"}
        />
      </div>
    </>
  );
}
