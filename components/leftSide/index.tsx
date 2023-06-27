import Image from 'next/image';
import React from 'react';
import { github } from '../common/icons';
import { TbBrandGithub } from 'react-icons/tb';
import Link from 'next/link';
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';

const LeftSide = () => {
  return (
    <div className="text-text-light dark:text-text-grey w-full h-full flex flex-col items-center justify-end gap-4 ">
      <div className="dark:bg-hover-color flex flex-col gap-4">
        <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="hover:text-body-color-light dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </Link>
        <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="hover:text-body-color-light dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </Link>
        <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="hover:text-body-color-light dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </Link>
        <Link href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="hover:text-body-color-light dark:hover:text-text-green w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </Link>
      </div>
      <div className="bg-text-light dark:bg-text-dark w-[2px] h-32 " />
    </div>
  );
};

export default LeftSide;
