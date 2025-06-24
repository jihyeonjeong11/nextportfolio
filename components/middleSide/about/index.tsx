import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { useTranslations } from "next-intl";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";
import profile from "@/public/images/profile.webp";

const About = () => {
  const t = useTranslations("About");
  const techStack = [
    "JavaScript (ES6+)",
    "Next.js",
    "React",
    "React-Native",
    "Vue3",
    "Node.js",
    "Django",
    "PostgreSql",
    "BigQuery",
    "TailwindCSS",
  ];

  return (
    <section
      id="about"
      className="max-w-container-small mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title={t("sectionTitle")} titleNo="01" />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-text-light dark:text-text-dark lgl:w-2/3 text-base font-medium flex flex-col gap-4">
          <p>{t("intro")}</p>
          {/* <p>{t("experience")}</p> */}
          <p>{t("adaptability")}</p>
          <p>{t("techListIntro")}</p>

          <ul className="max-w-[450px] text-sm font-title-font grid grid-cols-2 gap-2 mt-6">
            {techStack.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-body-color-light dark:text-text-green">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg z-0">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg w-max-[300px] h-full md:object-cover lgl:object-cover"
                src={profile}
                alt="profile pic"
                priority
              />
              <div className="bg-body-color-light/20 dark:bg-text-green/20 hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>

          <div className="border-body-color-light dark:border-text-green hidden lgl:inline-flex w-full h-80 border-2 rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default About;
