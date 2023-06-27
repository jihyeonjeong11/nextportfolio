import React from 'react';
import { BsFillFolderFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

import SectionTitle from '../common/SectionTitle';

const Post = () => {
  return (
    <section id="posts" className="max-w-content-container mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="My velog posts" titleNo="04" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <a
          href="https://velog.io/@jihyeonjeong11/%EC%9E%8A%EC%A7%80-%EC%95%8A%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%8F%AC%EC%8A%A4%ED%8C%85-%EC%B1%84%ED%8C%85-%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%98%95%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0"
          target="_blank"
        >
          <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill size="22" />
              <BiLinkExternal size="15" />
            </div>
            <div>
              <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                Parsing GPT message to JSON
              </h2>
              <p className="text-sm mt-3">
                {' '}
                Parsed GPT response string to JSON format with pure javascript.
              </p>
            </div>
            <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
              <li>Javascript</li>
              <li>ES7+</li>
            </ul>
          </div>
        </a>{' '}
        <a
          href="https://velog.io/@jihyeonjeong11/%EC%9E%8A%EC%A7%80-%EC%95%8A%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%8F%AC%EC%8A%A4%ED%8C%85-%EC%B1%84%ED%8C%85-%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%98%95%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0"
          target="_blank"
        >
          <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill size="22" />
              <BiLinkExternal size="15" />
            </div>
            <div>
              <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                Parsing GPT message to JSON
              </h2>
              <p className="text-sm mt-3">
                {' '}
                Parsed GPT response string to JSON format with pure javascript.
              </p>
            </div>
            <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
              <li>Javascript</li>
              <li>ES7+</li>
            </ul>
          </div>
        </a>{' '}
        <a
          href="https://velog.io/@jihyeonjeong11/%EC%9E%8A%EC%A7%80-%EC%95%8A%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%8F%AC%EC%8A%A4%ED%8C%85-%EC%B1%84%ED%8C%85-%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%98%95%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0"
          target="_blank"
        >
          <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
              <BsFillFolderFill size="22" />
              <BiLinkExternal size="15" />
            </div>
            <div>
              <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                Parsing GPT message to JSON
              </h2>
              <p className="text-sm mt-3">
                {' '}
                Parsed GPT response string to JSON format with pure javascript.
              </p>
            </div>
            <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
              <li>Javascript</li>
              <li>ES7+</li>
            </ul>
          </div>
        </a>{' '}
      </div>
    </section>
  );
};

export default Post;
