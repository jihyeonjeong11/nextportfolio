'use client';

import { useState, useEffect } from 'react';
import * as utils from '../utils/index';

export function useResolutions() {
  return {
    value: true,
    isSSR: utils.isSSR,
  };
}
