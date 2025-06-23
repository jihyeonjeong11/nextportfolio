import React from "react";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import { BiLink } from "react-icons/bi";

import after10Img from "@/public/images/after10months.png";
import patientSynthImg from "@/public/images/patientSynthImg.png";
import flyingcatImg from "@/public/images/flyingcat.jpeg";
import babygoImg from "@/public/images/babygo.jpeg";
import Link from "next/link";

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
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
                After10Months
              </h3>
            </div>
            <p className="z-50 text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Pregnancy week calculation, weekly fetal growth report, parenting
              growth and development check, fever management, pregnancy
              probability check, etc. An essential diary for expectant mothers.
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li>React-Native</li>
              <li>Typescript</li>
              <li>Styled-Components</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
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
                PatientSynth & SIMPREC
              </h3>
            </div>
            <p className="z-50 text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An patient information generator and medical-exam manager powered
              by{" "}
              <span className="text-text-light dark:text-text-green">
                {" "}
                OpenAi GPT 4.0
              </span>{" "}
              engine. Refactoring Jquery codebase to modern features such as
              Service Worker, Centralized state management, WebRTC, WebSocket
              and much more.
            </p>
            <ul className="text-body-color-light dark:text-text-dark text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between ">
              <li>Vue3</li>
              <li>React</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
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
                애기야가자
              </h3>
            </div>
            <p className="text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              Hybrid mobile app project for visualizing personalized places to
              visit for family. Creating ID card for children and getting
              recommended top places via big data, user reviews, recently
              popular places and detailed info uploaded by business owner
              themselves.
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
        <div className="flex flex-col xl:flex-row gap-6">
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
                CrunchPrice
              </h3>
            </div>
            <p className="text-white dark:text-text-dark bg-body-color-light dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              Hybrid E-commerce mobile app and web app. Show featured products
              categorized by brand, show merchandise detail, handling shopping
              cart and purchase.
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
