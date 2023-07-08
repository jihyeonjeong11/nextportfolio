import * as delays from '@/constants/delays';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'JIHYEON JEONG',
  description: 'frontend dev',
  icons: {
    icon: [{ url: '/icons/logo.svg' }],
  },
};

const DynamicMotionedDiv = dynamic(
  () => import('@/components/common/framer/MotionedDiv')
);

const DynamicNavBar = dynamic(() => import('./Navbar'));
const DynamicLeftSide = dynamic(() => import('@/components/leftSide'));
const DynamicRightSide = dynamic(() => import('@/components/rightSide'));
const DynamicBanner = dynamic(() => import('@/components/middleSide/banner'));
const DynamicAbout = dynamic(() => import('@/components/middleSide/about'));
const DynamicExperience = dynamic(
  () => import('@/components/middleSide/experience')
);
const DynamicProject = dynamic(() => import('@/components/middleSide/project'));
const DynamicPost = dynamic(() => import('@/components/middleSide/post'));

const DynamicContact = dynamic(() => import('@/components/middleSide/contact'));

export default function Home() {
  return (
    <main className="scroll-smooth bg-hover-color-light w-full h-screen dark:bg-body-color text-text-grey overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-text-dark/20 scrollbar-thumb-text-dark/60">
      <DynamicNavBar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <DynamicMotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <DynamicLeftSide />
        </DynamicMotionedDiv>
        <div className="h-[88vh] w-full mx-auto p-4">
          <DynamicBanner />
          <DynamicAbout />
          <DynamicExperience />
          <DynamicProject />
          <DynamicPost />
          <DynamicContact />
        </div>
        <DynamicMotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delays.SIDE }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <DynamicRightSide />
        </DynamicMotionedDiv>
      </div>
    </main>
  );
}
