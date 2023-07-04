import { useState, Fragment } from 'react';
import MotionedDiv from '../framer/MotionedDiv';
import { MdOutlineClose } from 'react-icons/md';

import { TbBrandGithub } from 'react-icons/tb';
import Link from 'next/link';
import { SlSocialLinkedin } from 'react-icons/sl';

import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants/strings';
import * as delays from '@/constants/delays';

export default function MyDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  return (
    <div>
      {isOpen && (
        <div
          className="z-20 absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
        >
          <MotionedDiv
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (
                (e.target as HTMLElement).tagName === 'LI' ||
                (e.target as HTMLElement).tagName === 'SPAN'
              )
                setIsOpen(!isOpen);
              e.stopPropagation();
            }}
            className="bg-body-color-light dark:bg-[#112240] w-[80%] h-full overflow-y-scroll  flex flex-col items-center px-4 py-10 relative"
          >
            <MdOutlineClose
              onClick={() => setIsOpen(false)}
              className="text-3xl text-text-light dark:text-text-green cursor-pointer hover:text-red-500 dark:hover:text-white absolute top-4 right-4"
            />
            <div className="flex flex-col items-center gap-7">
              <ul className="flex flex-col text-base gap-7">
                <a
                  aria-label="mobile-to-home"
                  className="flex items-center gap-1 font-medium text-text-light hover:text-white dark:text-text-dark dark:hover:text-text-green cursor-pointer duration-300 nav-link"
                  href="#home"
                >
                  <MotionedDiv
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: delays.FIRST,
                      ease: 'easeIn',
                    }}
                  >
                    <li className="opacity-100 transform-none">Home</li>
                  </MotionedDiv>
                </a>
                <a
                  aria-label="mobile-to-about"
                  className="flex items-center gap-1 font-medium text-text-light hover:text-white dark:text-text-dark dark:hover:text-text-green cursor-pointer duration-300 nav-link"
                  href="#about"
                >
                  <MotionedDiv
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: delays.SECOND,
                      ease: 'easeIn',
                    }}
                  >
                    {' '}
                    <li>
                      <span className="text-text-light dark:text-text-green">
                        01.{' '}
                      </span>
                      About
                    </li>
                  </MotionedDiv>
                </a>
                <a
                  aria-label="mobile-to-experience"
                  className="flex items-center gap-1 font-medium text-text-light hover:text-white dark:text-text-dark dark:hover:text-text-green cursor-pointer duration-300 nav-link"
                  href="#experience"
                >
                  <MotionedDiv
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: delays.THIRD,
                      ease: 'easeIn',
                    }}
                  >
                    {' '}
                    <li>
                      <span className="text-text-light dark:text-text-green">
                        02.{' '}
                      </span>
                      Experience
                    </li>
                  </MotionedDiv>
                </a>
                <a
                  aria-label="mobile-to-project"
                  className="flex items-center gap-1 font-medium text-text-light hover:text-white dark:text-text-dark dark:hover:text-text-green cursor-pointer duration-300 nav-link"
                  href="#project"
                >
                  <MotionedDiv
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: delays.FOURTH,
                      ease: 'easeIn',
                    }}
                  >
                    {' '}
                    <li>
                      <span className="text-text-light dark:text-text-green">
                        03.{' '}
                      </span>
                      Projects
                    </li>
                  </MotionedDiv>
                </a>
                <a
                  aria-label="mobile-to-contact"
                  className="flex items-center gap-1 font-medium text-text-light hover:text-white dark:text-text-dark dark:hover:text-text-green cursor-pointer duration-300 nav-link"
                  href="#contact"
                >
                  <MotionedDiv
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: delays.FIFTH,
                      ease: 'easeIn',
                    }}
                  >
                    {' '}
                    <li>
                      <span className="text-text-light dark:text-text-green">
                        04.{' '}
                      </span>
                      Contact
                    </li>
                  </MotionedDiv>
                </a>
              </ul>
              {/* <a href="/assets/noor_resume.pdf" target="_blank">
                <button className="w-32 h-10 rounded-md text-text-light hover:text-white dark:text-text-green text-[13px] border border-text-light dark:border-text-green hover:bg-hoverColor duration-300">
                  Resume
                </button>
              </a> */}
              <div className="flex gap-4">
                <div className="flex gap-4">
                  <Link href={LINK_GITHUB} target="_blank">
                    <div className="bg-text-light hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <span>
                        <TbBrandGithub />
                      </span>
                    </div>
                  </Link>
                  <Link href={LINK_LINKEDIN} target="_blank">
                    <span className="bg-text-light hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </MotionedDiv>
        </div>
      )}
    </div>
  );
}
