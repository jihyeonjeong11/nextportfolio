import React from 'react';

const SectionTitle = ({
  title,
  titleNo,
}: {
  title: string;
  titleNo: string;
}) => {
  return (
    <h2 className="font-title-font text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg text-text-green mr-2">
        {titleNo}.
      </span>{' '}
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
