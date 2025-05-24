import Box from "../../component/box";
import { FadeLeft } from "../../fade";

export default function Education() {
  return (
    <>
      <div>
        <FadeLeft>
          <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
            My <span className="text-space-neon">Education</span>
          </h3>
          <p className="text-base py-2 text-gray-800 dark:text-gray-200">
            Education is a journey of exploration, from fundamentals to
            expertise, built through experience, experimentation, and challenges
            that drive growth.
          </p>
        </FadeLeft>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <Box
          firstTitle={"2020"}
          secondTitle={"Bachelor's degree in Computer Science"}
          thridTitle={"Pakuan University"}
        />
        <Box
          firstTitle={"2023"}
          secondTitle={"Cloud Practitioner Essentials"}
          thridTitle={"Dicoding Academy"}
        />
        <Box
          firstTitle={"2023"}
          secondTitle={"Javascript Course"}
          thridTitle={"Dicoding Academy"}
        />
        <Box
          firstTitle={"2023"}
          secondTitle={"Backend Programming Course"}
          thridTitle={"Dicoding Academy"}
        />
      </div>
    </>
  );
}
