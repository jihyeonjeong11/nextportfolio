import Navbar from './Navbar';
import LeftSide from '@/components/leftSide';
import RightSide from '@/components/rightSide';
import MotionedDiv from '@/components/common/framer/MotionedDiv';
import Banner from '@/components/middleSide/banner';
import * as delays from '@/constants/delays';
import About from '@/components/middleSide/about';
import Experience from '@/components/middleSide/experience';
import Project from '@/components/middleSide/project';
import Post from '@/components/middleSide/post';

export const metadata = {
  title: 'JIHYEON JEONG',
  description: 'frontend dev',
};

export default function Home() {
  return (
    <main className="bg-hover-color-light w-full h-screen dark:bg-body-color text-text-grey overflow-x-hidden overflow-y-scroll">
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
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Project />
          <Post />
        </div>
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </MotionedDiv>
      </div>
    </main>
  );
}
