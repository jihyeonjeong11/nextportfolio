import MotionedDiv from "@/components/common/framer/MotionedDiv";
import About from "@/components/middleSide/about";
import Banner from "@/components/middleSide/banner";
import Contact from "@/components/middleSide/contact";
import Experience from "@/components/middleSide/experience";
import Post from "@/components/middleSide/post";
import Project from "@/components/middleSide/project";

import * as delays from "@/constants/delays";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
  icons: {
    icon: [{ url: "/icons/logo.svg" }],
  },
};

const DynamicNavBar = dynamic(() => import("@/app/dashboard/Navbar/index"));
const DynamicLeftSide = dynamic(() => import("@/components/leftSide"));
const DynamicRightSide = dynamic(() => import("@/components/rightSide"));

export default function Home() {
  const t = useTranslations("HomePage");
  console.log(t("title"));
  return (
    <main className="scroll-smooth bg-hover-color-light w-full h-screen dark:bg-body-color text-text-grey overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-text-dark/20 scrollbar-thumb-text-dark/60">
      <DynamicNavBar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <DynamicLeftSide />
        </MotionedDiv>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          {/* 무슨 일, 무슨 강점을 보여줄 수 있는지 적어야 함. */}
          <Project /> {/* 서비스 소개에숴 끝냄 */}
          {/* <Post /> */}
          <Contact />
        </div>
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <DynamicRightSide />
        </MotionedDiv>
      </div>
    </main>
  );
}
