import React from "react";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import { BiLink } from "react-icons/bi";

import after10Img from "@/public/images/after10months.png";
import patientSynthImg from "@/public/images/patientSynthImg.png";
import flyingcatImg from "@/public/images/flyingcat.jpeg";
import babygoImg from "@/public/images/babygo.jpeg";
import pwaWindows from "@/public/images/pwa-windows.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Project = () => {
  const t = useTranslations("Projects");
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={pwaWindows}
                alt="pwawindows"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-5">
            <div>
              <div className="text-2xl flex gap-4 justify-end">
                <Link
                  className="hover:text-body-color-light dark:hover:text-text-green duration-300"
                  href="https://jihyeonjeong11.github.io/pwa-github-page/"
                  target="_blank"
                >
                  <BiLink />
                </Link>
              </div>
              <p className="text-text-light dark:text-text-green font-title-font text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-text-light dark:text-text-green text-2xl font-bold">
                {t("project5Title")}
              </h3>
            </div>
            <p className="text-left z-50 text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              {t("project5Content")}
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li>Vite-PWA</li>
              <li>Reactjs</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>React-Rnd</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={after10Img}
                alt="after10"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-5">
            <div>
              <div className="text-2xl flex gap-4 justify-end">
                <Link
                  className="hover:text-body-color-light dark:hover:text-text-green duration-300"
                  href="https://www.after10m.com/ko/"
                  target="_blank"
                >
                  <BiLink />
                </Link>
              </div>
              <p className="text-text-light dark:text-text-green font-title-font text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-text-light dark:text-text-green text-2xl font-bold">
                {t("project1Title")}
              </h3>
            </div>
            <p className="text-left z-50 text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              {t("project1Content")}
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li>React-Native</li>
              <li>Typescript</li>
              <li>Styled-Components</li>
              <li>Echarts</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={patientSynthImg}
                alt="patientsynth"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-5">
            <div>
              <div className="text-2xl flex gap-4 justify-end">
                <Link
                  className="hover:text-body-color-light dark:hover:text-text-green duration-300"
                  href="https://www.ibstech.kr/"
                  target="_blank"
                >
                  <BiLink />
                </Link>
              </div>
              <p className="text-text-light dark:text-text-green font-title-font text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-text-light dark:text-text-green text-2xl font-bold">
                {t("project2Title")}
              </h3>
            </div>
            <p className="z-50 text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              {t("project2Content")}{" "}
              <span className="text-text-light dark:text-text-green">
                {" "}
                {t("project2Highlight")}
              </span>{" "}
              {t("project2ContentSecond")}
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li>Vue3</li>
              <li>React</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>WebRTC</li>
              <li>React-Rnd</li>
              <li>JsPdf</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://babygo.kr"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-[500px] object-contain"
                src={babygoImg}
                alt="babygo"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6  items-end text-right xl:-ml-16 z-5">
            <div>
              <div className="text-2xl flex gap-4 justify-end">
                <Link
                  className="hover:text-body-color-light dark:hover:text-text-green duration-300"
                  href="https://babygo.kr/"
                  target="_blank"
                >
                  <BiLink />
                </Link>
              </div>
              <p className="font-title-font text-text-light dark:text-text-green text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-text-light dark:text-text-green text-2xl font-bold">
                {t("project3Title")}
              </h3>
            </div>
            <p className="text-left text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              {t("project3Content")}
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between">
              <li>React-Native</li>
              <li>Typescript</li>
              <li>Django</li>
              <li>AWS</li>
              <li>Google clouds</li>
              <li>Postgresql</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-[500px] object-contain"
                src={flyingcatImg}
                alt="flyingcat"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6  items-end text-right xl:-ml-16 z-5">
            <div>
              <p className="font-title-font text-text-light dark:text-text-green text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-text-light dark:text-text-green text-2xl font-bold">
                {t("project4Title")}
              </h3>
            </div>
            <p className="text-left text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              {t("project4Content")}
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between">
              <li>React-Native</li>
              <li>React</li>
              <li>Django</li>
              <li>AWS</li>
              <li>Postgresql</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
