'use client';

import { experiences } from '@/constants/strings';
import MotionedDiv from '@/components/common/framer/MotionedDiv';
import React, { memo } from 'react';
import { TiArrowForward } from 'react-icons/ti';

const ExpCard = ({ expType }: { expType: (typeof experiences)[0] }) => {
  let content: JSX.Element;

  switch (expType) {
    case experiences[0]:
      content = (
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
            Frontend Lead{' '}
            <span className="text-body-color-light dark:text-text-green tracking-wide">
              @Ibstech
            </span>
          </h3>
          <p className="text-sm mt-1 font-medium text-text-dark">
            Oct 2022 - June 2023
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
              <span className="mt-1 dark:text-text-green text-body-color-light">
                <TiArrowForward />
              </span>
              <p>
                Wrote quality, robust code for a medical-exam managing web apps
                collaborating with colleges including Chonnam, Pusan.
                Collaborating with associates through collaborating and sharing
                & discussing knowledge about modern web structure.
              </p>
            </li>
          </ul>
        </MotionedDiv>
      );
      break;
    case experiences[1]:
      content = (
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
            Development Lead{' '}
            <span className="text-body-color-light dark:text-text-green tracking-wide">
              @애기야가자
            </span>
          </h3>
          <p className="text-sm mt-1 font-medium text-text-dark">
            Jan 2021 - May 2022
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
              <span className="mt-1 dark:text-text-green text-body-color-light">
                <TiArrowForward />
              </span>
              <p>
                Full stack development on place-suggesting live service product
                Focusing from planning DB schema to implementing adequate mobile
                app UI structure. Provided leadership with team toward same
                goal, {`"Get things done"`} achieving launching new services and
                features with timely manner,s including{' '}
                <span className="dark:text-text-green text-body-color-light">
                  Child ID card
                </span>
                ,{' '}
                <span className="dark:text-text-green text-body-color-light">
                  User content forum system
                </span>
                ,{' '}
                <span className="dark:text-text-green text-body-color-light">
                  Place-suggesting feature
                </span>{' '}
                through Bigdata collection powered by Google Bigquery and
                various collaboration features with{' '}
                <span className="dark:text-text-green text-body-color-light">
                  밴더스터
                </span>
                ,{' '}
                <span className="dark:text-text-green text-body-color-light">
                  더핑크퐁컴퍼니
                </span>
                ,{' '}
                <span className="dark:text-text-green text-body-color-light">
                  한화생명
                </span>{' '}
                and more.
              </p>
            </li>
          </ul>
        </MotionedDiv>
      );
      break;
    case experiences[2]:
      content = (
        <MotionedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
            Frontend developer{' '}
            <span className="text-body-color-light dark:text-text-green tracking-wide">
              @CrunchCompany
            </span>
          </h3>
          <p className="text-sm mt-1 font-medium text-text-dark">
            May 2019 - Aug 2020
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
              <span className="mt-1 dark:text-text-green text-body-color-light">
                <TiArrowForward />
              </span>
              Developed, maintained E-commerce app and web app.
            </li>
          </ul>
        </MotionedDiv>
      );
      break;

    default:
      content = <div>something went wrong</div>;
      break;
  }

  return <div>{content}</div>;
};

export default memo(ExpCard);
