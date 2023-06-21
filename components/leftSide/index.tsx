import Image from 'next/image';
import React from 'react';
import { github } from '../common/icons';
import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-text-light">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="w-10 h-10 text-xl bg-hover-color rounded-full inline-flex items-center justify-center hover:text-text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="w-10 h-10 text-xl bg-hover-color rounded-full inline-flex items-center justify-center hover:text-text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="w-10 h-10 text-xl bg-hover-color rounded-full inline-flex items-center justify-center hover:text-text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://github.com/jihyeonjeong11" target="_blank">
          <span className="w-10 h-10 text-xl bg-hover-color rounded-full inline-flex items-center justify-center hover:text-text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-text-dark" />
    </div>
  );
};

export default LeftSide;
