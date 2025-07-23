import React from 'react';

import MotionedDiv from '@/components/common/framer/MotionedDiv';

import * as delays from '@/constants/delays';
import { useTranslations } from 'next-intl';

const Banner = () => {
  const t = useTranslations('Banner');
  return (
    <section
      id="home"
      className="max-w-content-container mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl: px-4"
    >
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_FIRST }}
      >
        <h3 className="text-text-light dark:text-text-green text-lg font-monsterrat tracking-wide ">
          Hi, my name is
        </h3>
      </MotionedDiv>
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_SECOND }}
      >
        <h1 className="text-text-light dark:text-text-dark text-4xl lgl:text-6xl font-title-font font-semibold flex flex-col">
          {t('name')}{' '}
          <span className="text-body-color-light dark:text-text-dark mt-2 lgl:mt-4">
            {t('tagline')}
          </span>
        </h1>
      </MotionedDiv>
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_THIRD }}
      >
        <p className="text-text-light dark:text-text-dark text-base md:max-w-[650px]  font-medium">
          {' '}
          {t('description')}
        </p>
        <a aria-label="to-github" href="https://github.com/jihyeonjeong11">
          <span className="text-body-color-light dark:text-text-green inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="bg-text-light dark:bg-text-green absolute w-full h-[1px] left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </MotionedDiv>
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_FOURTH }}
      >
        <a aria-label="to-project" href="#project">
          <button
            aria-label="banner-project"
            className="border-text-light text-text-light hover:text-body-color-light dark:border-text-green dark:text-text-green dark:hover:bg-hover-color w-52 h-14 text-sm font-titleFont border rounded-md tracking-wide duration-300"
          >
            Check out my projects
          </button>
        </a>
      </MotionedDiv>
    </section>
  );
};

export default Banner;
