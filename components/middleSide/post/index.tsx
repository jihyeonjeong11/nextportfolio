import React from 'react';
import { BsFillFolderFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

import SectionTitle from '../common/SectionTitle';
import Link from 'next/link';

const Post = () => {
  return (
    <section id="posts" className="max-w-content-container mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="My velog posts" titleNo="04" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/%EC%9E%8A%EC%A7%80-%EC%95%8A%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%8F%AC%EC%8A%A4%ED%8C%85-%EC%B1%84%ED%8C%85-%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%98%95%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0"
          target="_blank"
        >
          <div className="bg-body-color-light dark:bg-[#112240] w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill
                className="text-white dark:text-text-dark"
                size="22"
              />
              <BiLinkExternal
                className="text-white dark:text-text-dark"
                size="25"
              />
            </div>
            <div>
              <h2 className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xl font-title-font font-semibold tracking-wide ">
                Parsing GPT message to JSON
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                {' '}
                Parsed GPT response string to JSON format with pure javascript.
              </p>
            </div>
            <ul className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm text-text-dark flex items-center gap-2 justify-between flex-wrap">
              <li>Javascript</li>
              <li>ES7+</li>
            </ul>
          </div>
        </Link>{' '}
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/NextJS13%EC%9C%BC%EB%A1%9C-%EC%83%88-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%9E%90-3-Next-themes-%EC%A0%81%EC%9A%A9%EA%B3%BC-sequential-animations"
          target="_blank"
        >
          <div className="bg-body-color-light dark:bg-[#112240] w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill
                className="text-white dark:text-text-dark"
                size="22"
              />
              <BiLinkExternal
                className="text-white dark:text-text-dark"
                size="25"
              />
            </div>
            <div>
              <h2 className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xl font-title-font font-semibold tracking-wide ">
                Creating Portfolio with NextJS13 + App routing 3:
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                {' '}
                Theming & Sequential Animation with framer-motion
              </p>
            </div>
            <ul className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm text-text-dark flex items-center gap-2 justify-between flex-wrap">
              <li>nextjs13+</li>
              <li>framer-motion</li>
            </ul>
          </div>
        </Link>{' '}
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/TRPC-%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%8F%84%EC%A0%84%EA%B8%B0-%EC%8B%A4%ED%8C%A8"
          target="_blank"
        >
          <div className="bg-body-color-light dark:bg-[#112240] w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill
                className="text-white dark:text-text-dark"
                size="22"
              />
              <BiLinkExternal
                className="text-white dark:text-text-dark"
                size="25"
              />
            </div>
            <div>
              <h2 className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xl font-title-font font-semibold tracking-wide ">
                Side projects onhold: t3 stack with websocket.
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                {' '}
                t3 stack chat app with websocket & tRPC
              </p>
            </div>
            <ul className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm flex items-center gap-2 justify-between flex-wrap">
              <li>nextjs13+</li>
              <li>tRPC</li>
            </ul>
          </div>
        </Link>{' '}
      </div>
    </section>
  );
};

export default Post;
