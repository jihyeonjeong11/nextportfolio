import React from 'react';
import Link from 'next/link';
import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants/strings';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-content-container mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="text-text-light dark:text-text-dark font-title-font text-5xl font-semibold">
        Get In Touch
      </h2>
      <p className="text-text-light dark:text-text-dark max-w-[600px] text-center">
        Currently I’m opening for new oportunities. Please contact me via my
        professional email or my phone number. Whether you have a question or
        just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="text-text-light dark:text-text-grey hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
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
      </div>
    </section>
  );
};

export default Contact;
