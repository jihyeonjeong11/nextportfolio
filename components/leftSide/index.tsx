import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import Link from 'next/link';
import { SlSocialLinkedin } from 'react-icons/sl';

import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants/strings';

const LeftSide = () => {
  return (
    <div className="text-text-light dark:text-text-grey w-full h-full flex flex-col items-center justify-end gap-4 ">
      <div className="flex flex-col gap-4">
        <Link href={LINK_GITHUB} target="_blank">
          <div className="bg-body-color-light dark:bg-hover-color hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <span>
              <TbBrandGithub />
            </span>
          </div>
        </Link>
        <Link href={LINK_LINKEDIN} target="_blank">
          <span className="bg-body-color-light dark:bg-hover-color hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </Link>
        {/* <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className=" bg-body-color-light dark:bg-hover-color hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </Link>
        <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="bg-body-color-light dark:bg-hover-color hover:text-white dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </Link> */}
      </div>
      <div className="bg-text-light dark:bg-text-dark w-[2px] h-32 " />
    </div>
  );
};

export default LeftSide;
