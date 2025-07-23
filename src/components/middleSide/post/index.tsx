import React from "react";
import Link from "next/link";
import { BsFillFolderFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import SectionTitle from "../common/SectionTitle";

const Post = () => {
  return (
    <section id="posts" className="max-w-content-container mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="My Posts" titleNo="04" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/Obsidian%EA%B3%BC-Zettelkasten-%EB%85%B8%ED%8A%B8-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0"
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
                Obsidian과 Zettelkasten 노트 작성하기
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                옵시디언을 통한 자신만의 개발 위키 만들기
              </p>
            </div>
            <ul className="text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm text-text-dark flex items-center gap-2 justify-between flex-wrap">
              <li>obsidian</li>
            </ul>
          </div>
        </Link>
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/PWA-%EB%8D%94-%EC%8B%B8%EA%B2%8C-%EB%8D%94-%EB%B9%A0%EB%A5%B4%EA%B2%8C"
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
                PWA - 더 싸게, 더 빠른 개발
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                네이티브, 하이브리드, PWA로 이어지는 흐름. 메인스트림이 될 수
                있을까?
              </p>
            </div>
            <ul className="text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm text-text-dark flex items-center gap-2 justify-between flex-wrap">
              <li>PWA</li>
              <li>Vite</li>
            </ul>
          </div>
        </Link>
        <Link
          aria-label="to-velog"
          href="https://velog.io/@jihyeonjeong11/%ED%81%B4%EB%A6%B0-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-1"
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
                클린 아키텍쳐
              </h2>
              <p className="text-text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-sm mt-3">
                코딩을 시작하기 전 한 번 씩 다시 읽어봐야 할...
              </p>
            </div>
            <ul className="text-light group-hover:text-white dark:text-text-dark dark:group-hover:text-text-green text-xs mdl:text-sm text-text-dark flex items-center gap-2 justify-between flex-wrap">
              <li>NextJS - app router</li>
            </ul>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Post;
