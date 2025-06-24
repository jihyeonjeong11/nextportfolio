import Navbar from "@/app/dashboard/Navbar/index";
import MotionedDiv from "@/components/common/framer/MotionedDiv";
import LeftSide from "@/components/leftSide";
import About from "@/components/middleSide/about";
import Banner from "@/components/middleSide/banner";
import Contact from "@/components/middleSide/contact";
import Experience from "@/components/middleSide/experience";
import Project from "@/components/middleSide/project";
import RightSide from "@/components/rightSide";

import * as delays from "@/constants/delays";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
  icons: {
    icon: [{ url: "/icons/logo.svg" }],
  },
};

export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <main className="scroll-smooth bg-hover-color-light w-full h-screen dark:bg-body-color text-text-grey overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-text-dark/20 scrollbar-thumb-text-dark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </MotionedDiv>
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </MotionedDiv>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          <About />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Experience />
          </NextIntlClientProvider>
          <Project />
          {/* <Post /> */}
          <Contact />
        </div>
      </div>
    </main>
  );
}
