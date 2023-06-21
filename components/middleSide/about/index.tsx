import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

import SectionTitle from '../common/SectionTitle';
import profileTemp from '@/public/profileTemp.webp';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-container-small mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-text-dark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Jihyeon Jeong and I enjoy coding and creating
            values from them. Started my career since 2019 in web development
            when I decided to become a professional frontend dev. I still love
            learning about new things and implenting to my services.
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,
            <span className="text-text-green">
              a huge corporation, and a student-led design studio.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat
            <span className="text-text-green">
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-title-font grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              React-Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              Vue3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              Django
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              PostgreSql
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              BigQuery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-text-green">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileTemp}
                alt="profile pic"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-text-green/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-text-green rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default About;
