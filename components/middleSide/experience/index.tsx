'use client';

import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ExpCard from './components/ExpCard';
import { ExpreienceType, experiences } from '@/constants/strings';

const Experience = () => {
  const [switchState, setSwitchState] = useState<(typeof experiences)[0]>(
    experiences[0]
  );

  return (
    <section
      id="experience"
      className="max-w-container-xs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-40 flex flex-col">
          {experiences.map((exp, key) => (
            <li
              key={exp + key}
              className={
                `w-full border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium ` +
                (switchState === exp
                  ? 'border-l-text-green text-text-green'
                  : 'border-l-hover-color')
              }
              onClick={() => setSwitchState(exp)}
            >
              {exp}
            </li>
          ))}
        </ul>
        {switchState === 'Ibstech' && <ExpCard expType={switchState} />}
        {switchState === '애기야가자' && <ExpCard expType={switchState} />}
        {switchState === 'CrunchCompany' && <ExpCard expType={switchState} />}
      </div>
    </section>
  );
};

export default Experience;