import React from 'react';

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-text-light">
      <a arai-label="mail-to" href="mailto:jihyeonjeong1117@gmail.com">
        <p className="text-text-light dark:text-text-green text-sm rotate-90 w-72 tracking-wide ">
          jihyeonjeong1117@gmail.com
        </p>
      </a>
      <div className="bg-text-light dark:bg-text-dark w-[2px] h-32  inline-flex mt-12" />
    </div>
  );
};

export default RightSide;
