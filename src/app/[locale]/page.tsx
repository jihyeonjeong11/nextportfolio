import Navbar from "../../components/dashboard/Navbar";
import MotionedDiv from "@/components/common/framer/MotionedDiv";
import LeftSide from "@/components/leftSide";
import About from "@/components/middleSide/about";
import Banner from "@/components/middleSide/banner";
import Contact from "@/components/middleSide/contact";
import Experience from "@/components/middleSide/experience";
import Post from "@/components/middleSide/post";
import Project from "@/components/middleSide/project";
import RightSide from "@/components/rightSide";
import * as delays from "@/constants/delays";

export default function HomePage() {
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
          <Experience />
          <Project />
          <Post />
          <Contact />
        </div>
      </div>
    </main>
  );
}
