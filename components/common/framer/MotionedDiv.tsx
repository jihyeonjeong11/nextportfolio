'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type MotionedDivProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
} & MotionProps;

function MotionedDiv({ children, ...rest }: MotionedDivProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}

export default MotionedDiv;
