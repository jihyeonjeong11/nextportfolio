import React from 'react';

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-text-light">
      <a href="mailto:jihyeonjeong1117@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-text-green">
          jihyeonjeong1117@gmail.com
        </p>
      </a>
      <div className="w-[2px] h-32 bg-text-dark inline-flex mt-12" />
    </div>
  );
};

export default RightSide;
