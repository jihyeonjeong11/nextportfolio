import MotionedDiv from '@/components/common/framer/MotionedDiv';
import React from 'react';
import * as delays from '@/constants/delays';

const Banner = () => {
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
        <h3 className="text-lg font-monsterrat tracking-wide text-text-green">
          Hi, my name is
        </h3>
      </MotionedDiv>
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_SECOND }}
      >
        <h1 className="text-4xl lgl:text-6xl font-title-fond font-semibold flex flex-col">
          JIHYEON JEONG.{' '}
          <span className="text-text-dark mt-2 lgl:mt-4">
            I build things for the web.
          </span>
        </h1>
      </MotionedDiv>
      <MotionedDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delays.MAIN_THIRD }}
      >
        <p className="text-base md:max-w-[650px] text-text-dark font-medium">
          {' '}
          I am a web developer with 3+ years of experience in React. I have a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications using React
          and its ecosystem.
        </p>
        <a href="https://github.com/jihyeonjeong11">
          <span className="text-text-green inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-text-green left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </MotionedDiv>
      <button className="w-52 h-14 text-sm font-titleFont border border-text-green rounded-md text-text-green tracking-wide hover:bg-hover-color duration-300">
        Check out my projects
      </button>
    </section>
  );
};

export default Banner;
