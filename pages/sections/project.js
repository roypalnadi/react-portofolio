import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FadeLeft } from "../fade";
import ProjectCard from "../component/project-card";
import sinih from "../../public/project/sinih.png";
import sekita from "../../public/project/sekita-chat-app.png";
import mikir from "../../public/project/mikir-ai-assistant.png";

export default function Project() {
  return (
    <div className="w-full text-center">
      <FadeLeft>
        <h3 className="text-3xl py-1 dark:text-space-white font-semibold">
          <span className="text-space-neon">My</span> Projects
        </h3>
      </FadeLeft>
      <FadeLeft>
        <p className="text-base py-2 text-gray-800 dark:text-gray-200 mb-5">
          Explore some of my recent work and personal projects that showcase my
          skills and creativity.
        </p>
      </FadeLeft>
      <FadeLeft>
        <div className="">
          <Swiper
            className="!p-1"
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
            modules={[Navigation]}
            navigation
          >
            <SwiperSlide>
              <ProjectCard
                image={sinih}
                title="Sinih Meeting Web"
                description="Sinih is a lightweight web-based meeting platform. No need to install any apps — just start a meeting right from your browser."
                techStack={[
                  "ReactJS",
                  "NextJS",
                  "PostgresSQL",
                  "Typescript",
                  "Getstream",
                ]}
                link="https://sinih.vercel.app"
                linkGtihub="https://github.com/roypalnadi/sinih"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                image={sekita}
                title="Sekita Chat App"
                description="Sekita Chat App helps you talk with friends and family quickly and safely. It's easy to use and works well on all your devices."
                techStack={[
                  "ReactJS",
                  "NextJS",
                  "Firebase",
                  "Typescript",
                  "Getstream",
                ]}
                link="https://sekita-chat-app.vercel.app"
                linkGtihub="https://github.com/roypalnadi/sekita-chat-app"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                image={mikir}
                title="Mikir AI Assistant"
                description="Get instant help with tasks, answers, and more with our intuitive AI-powered assistant. Simplify your life with Mikir AI Assistant!"
                techStack={["ReactJS", "NextJS", "Typescript", "Together AI"]}
                link="https://mikir-ai-assistant.vercel.app/"
                linkGtihub="https://github.com/roypalnadi/mikir-ai-assistant"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </FadeLeft>
    </div>
  );
}
