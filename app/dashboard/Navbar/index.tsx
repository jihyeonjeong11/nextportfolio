'use client';

import React from 'react';
import Link from 'next/link';

import { montserrat } from '@/components/common/fonts';
import MotionedDiv from '@/components/common/framer/MotionedDiv';

import * as delays from '@/constants/delays';
import ThemeSwitcher from '@/app/theme-switcher';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Navbar = () => {
  return (
    <div className="bg-body-color-light dark:bg-body-color w-full shadow-navbar-shadow h-20 lg:h-[12vh] sticky top-0 z-50  px-4">
      <div
        className={`max-w-screen h-full mx-auto py-1 flex items-center justify-between ${montserrat.className}`}
      >
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeSwitcher />
        </MotionedDiv>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[17px] gap-7 text-text-light dark:text-text-dark">
            <Link
              className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
              href="#home"
            >
              <li>
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FIRST }}
                >
                  <span>Home</span>
                </MotionedDiv>
              </li>
            </Link>
            <Link
              className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
              href="#home"
            >
              <li>
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.SECOND }}
                >
                  <span>01. About</span>
                </MotionedDiv>
              </li>
            </Link>
            <Link
              className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
              href="#experience"
            >
              <li>
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.THIRD }}
                >
                  <span>03. Experience</span>
                </MotionedDiv>
              </li>
            </Link>
            <Link
              className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
              href="#projects"
            >
              <li>
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FOURTH }}
                >
                  <span>04. Projects</span>
                </MotionedDiv>
              </li>
            </Link>
            <Link
              className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
              href="#Contacts"
            >
              <li>
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FIFTH }}
                >
                  <span>05. Contacts</span>
                </MotionedDiv>
              </li>
            </Link>
            <a href="/sample.pdf" target="_blank">
              <MotionedDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delays.SIXTH }}
              >
                <button className="hover:text-hover-color-light text-text-light border-text-light dark:hover:bg-hover-color dark:border-text-green dark:text-text-green px-4 py-2 rounded-md  text-[13px] border   duration-300">
                  <span>Resume</span>
                </button>
              </MotionedDiv>
            </a>
          </ul>
        </div>
        {/* mobile icons section */}
        <div
          className="text-text-light w-6 h-5 flex flex-col justify-between items-center mdl:hidden
          text-4xl dark:text-text-green cursor-pointer overflow-hidden group
        "
        >
          <span className="w-full h-[2px] bg-text-green inline-flex transform group-hover:translate-x-2 duration-300 transition-all ease-in-out"></span>
          <span className="w-full h-[2px] bg-text-green inline-flex transform translate-x-3 group-hover:translate-x-0 duration-300 transition-all ease-in-out"></span>
          <span className="w-full h-[2px] bg-text-green inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
