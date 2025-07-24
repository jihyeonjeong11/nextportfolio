import * as React from 'react';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

export default function NextThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider storageKey={'theme'} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
