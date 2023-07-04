'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

// const data =
//   '--Bio--\n--Personal Information--\n1. Full Name: Samantha Johnson\n2. Gender: Female\n3. Date of Birth: March 10, 1990\n4. Age: 33\n5. Nationality: Canadian\n6. Ethnicity: Caucasian\n7. Marital Status: Single\n\n--Contact Information--\n8. Email: samantha.johnson@example.com\n9. Phone: +1 555-789-1234\n10. Address: 456 Elm Street, Anytown, Canada\n\n--Education--\n11. Highest Degree: Master of Science in Engineering\n12. University: XYZ University\n13. Graduation Year: 2013\n\n--Employment--\n14. Current Job Title: Project Manager\n15. Company: ABC Engineering Solutions\n16. Years of Experience: 8\n17. Previous Employment: DEF Engineering Firm, GHI Technologies\n\n--Skills--\n18. Project Management\n19. Leadership\n20. Problem-solving\n21. Communication\n22. Technical Analysis\n\n--Interests--\n23. Hobbies: Painting, hiking, reading\n24. Sports: Tennis, swimming\n25. Music: Classical, jazz';

// export const parseGPTToJSON = (string: string) => {
//   const gptArr = string.split('\n').filter((e) => e.length);
//   const resultMap = new Map<
//     string,
//     { phrases: string[]; hide: boolean; order?: number }
//   >();

//   try {
//     let currentTitle = '';
//     let numberedEntry = '';
//     let index = 1;

//     for (let i = 0; i < gptArr.length; i++) {
//       if (gptArr[i].endsWith('-')) {
//         currentTitle = gptArr[i].trim().replaceAll('--', '');
//         resultMap.set(currentTitle, { phrases: [], hide: false, order: i });
//       } else {
//         const contentArr = gptArr[i].split('.');
//         const phrases = contentArr
//           .map((e) => {
//             if (e) {
//               if (!isNaN(Number(e))) {
//                 numberedEntry = e.trim();
//               } else {
//                 const phrase = numberedEntry
//                   ? `${numberedEntry}. ${e.trim()}`
//                   : e.trim();
//                 numberedEntry = '';
//                 return phrase;
//               }
//             }
//           })
//           .filter(Boolean);

//         const currentEntry = resultMap.get(currentTitle);
//         if (currentEntry) {
//           currentEntry.phrases = currentEntry.phrases.concat(phrases);
//           currentEntry.hide = false; // Set hide to false (assuming it represents visibility)
//         }

//         resultMap.set(index.toString(), currentEntry);
//         index++;
//       }
//     }

//     return resultMap;
//   } catch {
//     console.log('err');
//   }
// };

export default function NextThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    //console.log(Object.fromEntries(parseGPTToJSON(data)));
  }, []);

  if (!mounted) {
    return <></>;
  } // this actually causes initial blank screen, or light themed page.

  return (
    <NextThemesProvider storageKey={'theme'} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
