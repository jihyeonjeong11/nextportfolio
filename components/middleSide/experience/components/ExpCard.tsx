"use client";
import MotionedDiv from "@/components/common/framer/MotionedDiv";
import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { useTranslations } from "next-intl";

export const ExpCard1 = () => {
  const t = useTranslations("Experiences");
  return (
    <MotionedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
        {t("exp1Role")}
        <span className="text-body-color-light dark:text-text-green tracking-wide">
          {t("exp1Title")}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-text-dark">{t("exp1Date")}</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
          <span className="mt-1 dark:text-text-green text-body-color-light">
            <TiArrowForward />
          </span>
          <p>
            {t("exp1Content")}
            <span className="dark:text-text-green text-body-color-light">
              {" " + t("exp1Highlight") + " "}
            </span>
            {t("exp1ContentSecond")}
          </p>
        </li>
      </ul>
    </MotionedDiv>
  );
};

export const ExpCard2 = () => {
  const t = useTranslations("Experiences");
  return (
    <MotionedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
        {t("exp2Role")}
        <span className="text-body-color-light dark:text-text-green tracking-wide">
          {t("exp2Title")}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-text-dark">{t("exp2Date")}</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
          <span className="mt-1 dark:text-text-green text-body-color-light">
            <TiArrowForward />
          </span>
          <p>{t("exp2Content")}</p>
        </li>
      </ul>
    </MotionedDiv>
  );
};

export const ExpCard3 = () => {
  const t = useTranslations("Experiences");
  return (
    <MotionedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
        {t("exp3Role")}
        <span className="text-body-color-light dark:text-text-green tracking-wide">
          {t("exp3Title")}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-text-dark">{t("exp3Date")}</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
          <span className="mt-1 dark:text-text-green text-body-color-light">
            <TiArrowForward />
          </span>
          <p>
            {t("exp3Content")}
            <span className="dark:text-text-green text-body-color-light">
              {" " + t("exp3Hightlight") + ", "}
            </span>
            {t("exp3ContentSecond")}
          </p>
        </li>
      </ul>
    </MotionedDiv>
  );
};

export const ExpCard4 = () => {
  const t = useTranslations("Experiences");
  return (
    <MotionedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-text-light dark:text-text-dark flex gap-1 font-medium text-xl font-title-font">
        {t("exp4Role")}
        <span className="text-body-color-light dark:text-text-green tracking-wide">
          {t("exp4Title")}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-text-dark">{t("exp4Date")}</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-text-light dark:text-text-dark">
          <span className="mt-1 dark:text-text-green text-body-color-light">
            <TiArrowForward />
          </span>
          <p>{t("exp4Content")}</p>
        </li>
      </ul>
    </MotionedDiv>
  );
};
