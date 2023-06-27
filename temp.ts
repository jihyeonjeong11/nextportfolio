export const parseGPTToJSON = (
  string: string
): { [key: string]: { phrases: string[]; hide: boolean } } => {
  const gptArr = string.split('\n').filter((e) => e.length); // 1. 먼저 newline을 날림.
  const resultObj: { [key: string]: { phrases: string[]; hide: boolean } } = {}; // 예상 완성 형태.
  try {
    let currentTitle = ''; // 오브젝트의 키값을 담아두기 위한 변수
    let numberedEntry = ''; // 제목 하위 번호 소제목을 담기 위한 변수
    for (let i = 0; i < gptArr.length; i++) {
      if (gptArr[i].endsWith('-')) {
        // 만약 -가 포함되어있다면, 대제목으로 간주함.
        currentTitle = gptArr[i].trim().replaceAll('-', ''); // 대제목에서 - 과 공백을 제거해서 키값으로 만듬.
        resultObj[currentTitle] = { phrases: [], hide: false };
      } else {
        // - 가 없다면, 제목이 아니라 내용으로 간주
        const contentArr = gptArr[i].split('. '); // 하위에서의 string 형식은 n. content로 간주해서 먼저 숫자 번호와 내용을 분리함
        contentArr.forEach((e) => {
          if (e) {
            if (!isNaN(Number(e))) {
              // 번호를 기록하기 위한 if
              return (numberedEntry = e);
            } else {
              // 번호가 아니라면 컨텐츠로 한다.
              if (numberedEntry) {
                // 주어진 번호가 있다면 해당 번호와 함께 컨텐츠를 넣어주고, numberedEntry를 버림.
                resultObj[currentTitle]['phrases'] = [
                  ...resultObj[currentTitle]['phrases'],
                  numberedEntry + '. ' + e.trim(),
                ];
                return (numberedEntry = '');
              } else {
                // numberedEntry가 없다면, 그냥 해당 스트링 자체만 넣음.
                return (resultObj[currentTitle]['phrases'] = [
                  ...resultObj[currentTitle]['phrases'],
                  e.trim(),
                ]);
              }
            }
          }
        });
      }
    }
    return resultObj;
  } catch {
    console.log('err');
    return { err: { phrases: [], hide: false } };
  }
};

// export const parseGPTToJSON = (string: string) => {
//   const gptArr = string.split('\n');
//   const resultObj: { [key: string]: { phrases: string[]; hide: boolean } } = {};
//   try {
//     let currentTitle = '';
//     let numberedEntry = '';
//     for (let i = 0; i < gptArr.length; i++) {
//       if (gptArr[i].endsWith('-')) {
//         currentTitle = gptArr[i].trim().replaceAll('--', '');
//         resultObj[currentTitle] = { phrases: [], hide: false };
//       } else {
//         const contentArr = gptArr[i].split('.');
//         contentArr.forEach((e) => {
//           if (e) {
//             if (/^[1-9]+$/.test(e)) {
//               return (numberedEntry = e);
//             } else {
//               if (numberedEntry) {
//                 resultObj[currentTitle]['phrases'] = [
//                   ...resultObj[currentTitle]['phrases'],
//                   numberedEntry + '. ' + e.trim(),
//                 ];
//                 return (numberedEntry = '');
//               } else {
//                 return (resultObj[currentTitle]['phrases'] = [
//                   ...resultObj[currentTitle]['phrases'],
//                   e.trim(),
//                 ]);
//               }
//             }
//           }
//         });
//       }
//     }
//     return resultObj;
//   } catch {
//     console.log('err');
//   }
// };
