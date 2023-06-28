import React from 'react';

const SectionTitle = ({
  title,
  titleNo,
}: {
  title: string;
  titleNo: string;
}) => {
  return (
    <h2 className="text-text-light dark:text-text-dark font-title-font text-2xl font-semibold flex items-center">
      <span className="text-body-color-light dark:text-text-green text-base md:text-lg mr-2">
        {titleNo}.
      </span>{' '}
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
