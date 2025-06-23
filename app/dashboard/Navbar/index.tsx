"use client";

import React from "react";

import { montserrat } from "@/components/common/fonts";
import MotionedDiv from "@/components/common/framer/MotionedDiv";

import * as delays from "@/constants/delays";
import ThemeSwitcher from "@/app/theme-switcher";
import MyDialog from "@/components/common/modal";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-body-color-light dark:bg-body-color w-full shadow-navbar-shadow h-20 lg:h-[12vh] sticky top-0 z-10 px-4">
      <nav
        className={`max-w-screen h-full mx-auto py-1 flex items-center gap-4 ${montserrat.className}`}
      >
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeSwitcher />
        </MotionedDiv>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ol className="flex text-[17px] gap-7 text-text-light dark:text-text-dark">
            <li>
              <a
                aria-label="to-home"
                className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
                href="#home"
              >
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FIRST }}
                >
                  <span>Home</span>
                </MotionedDiv>
              </a>
            </li>
            <li>
              <a
                aria-label="to-about"
                className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
                href="#about"
              >
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.SECOND }}
                >
                  <span>01. About</span>
                </MotionedDiv>
              </a>
            </li>
            <li>
              <a
                aria-label="to-experience"
                className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
                href="#experience"
              >
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.THIRD }}
                >
                  <span>03. Experience</span>
                </MotionedDiv>
              </a>
            </li>
            <li>
              <a
                aria-label="to-project"
                className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
                href="#project"
              >
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FOURTH }}
                >
                  <span>04. Projects</span>
                </MotionedDiv>
              </a>
            </li>
            <li>
              <a
                aria-label="to-contact"
                className="hover:text-hover-color-light dark:hover:text-text-green flex items-center gap-1 font-medium cursor-pointer duration-300 nav-link"
                href="#contact"
              >
                <MotionedDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delays.FIFTH }}
                >
                  <span>05. Contacts</span>
                </MotionedDiv>
              </a>
            </li>
          </ol>
        </div>
        {/* mobile icons section */}
        <button
          aria-label="mobile-menu"
          onClick={() => setIsOpen(true)}
          className="text-text-light w-6 h-5 flex flex-col justify-between items-center mdl:hidden
          text-4xl dark:text-text-green cursor-pointer overflow-hidden group
        "
        >
          <span className="w-full h-[2px] bg-text-light dark:bg-text-green inline-flex transform group-hover:translate-x-2 duration-300 transition-all ease-in-out"></span>
          <span className="w-full h-[2px] bg-text-light dark:bg-text-green inline-flex transform translate-x-3 group-hover:translate-x-0 duration-300 transition-all ease-in-out"></span>
          <span className="w-full h-[2px] bg-text-light dark:bg-text-green inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </button>
      </nav>
      <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
