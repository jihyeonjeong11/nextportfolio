import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

import SectionTitle from '../common/SectionTitle';
import profile from '@/public/images/profile.webp';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-container-small mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-text-light dark:text-text-dark lgl:w-2/3 text-base  font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Jihyeon Jeong and I enjoy coding and creating
            values from them. Started my career since 2019 in web development
            when I decided to become a professional frontend developer. Since
            then, I have consistently pursued learning opportunities and applied
            my knowledge to create exceptional services.
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at{' '}
            <span className="text-body-color-light dark:text-text-green">
              startups,{' '}
            </span>{' '}
            developing Sass projects from scratch and maintaining them in the
            most time-effecient manner.
            <span className="text-body-color-light dark:text-text-green">
              One of the key factors from my experience is the careful selection
              of appropriate tech stacks for each project, ensuring optimal
              results.
            </span>
          </p>
          <p>
            In addition to my practical experience, I am committed to enhancing
            my development skills through continuous learning. I frequently seek
            guidance from industry experts and stay up-to-date with the latest
            trends and techniques by watching YouTube videos and tutorials.
          </p>
          <p>
            I believe I can adopt any tech stacks in a timely manner to meet the
            requirements of any development organization. As a frontend
            developer, I am confident in my versatility and adaptability.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-title-font grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              React-Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              Vue3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              Django
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              PostgreSql
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              BigQuery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-body-color-light dark:text-text-green">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg z-0">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full w-max-[400px] md:object-contain lgl:object-cover"
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
