'use client';

import React, { useMemo, useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ExpCard1, ExpCard2, ExpCard3, ExpCard4 } from './components/ExpCard';
import { experiences } from '@/constants/strings';

const Experience = () => {
  const [switchState, setSwitchState] = useState<(typeof experiences)[0]>(
    experiences[0]
  );

  const Comp = useMemo(
    () =>
      switchState === experiences[0]
        ? ExpCard1
        : switchState === experiences[1]
        ? ExpCard2
        : switchState === experiences[2]
        ? ExpCard3
        : ExpCard4,
    [switchState]
  );

  return (
    <section
      id="experience"
      className="max-w-container-xs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ol className="md:w-40 flex flex-col">
          {experiences.map((exp, key) => (
            <li
              key={exp + key}
              className={
                `text-text-light dark:text-text-dark w-full border-l-2 bg-transparent dark:hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium ` +
                (switchState === exp
                  ? 'border-l-body-color-light text-text-body-color-light dark:border-l-text-green dark:text-text-green'
                  : 'border-l-hover-color')
              }
              onClick={() => setSwitchState(exp)}
            >
              {exp}
            </li>
          ))}
        </ol>
        <Comp />
      </div>
    </section>
  );
};

export default Experience;
