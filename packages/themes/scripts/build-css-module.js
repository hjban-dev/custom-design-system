import * as theme from '../dist/index.js';
import fs from 'fs';

// theme.css
// :root {
//   --gray-900: #171923
// }

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};

// css 변환하는 함수
const generateThemeCssVariables = () => {
  const cssString = [];

  Object.entries(theme.vars).forEach(([key, value]) => {
    // colors의 폴더 안에 light, dark 분류를 하기 위해 key === "colors"로 분류
    if (key === "colors") {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if (colorKey === 'light') {
          const selector = ':root';

          const cssVariables = Object.entries(colorValue).map(
            ([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(([subKey, subValue]) =>
                  `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`
              ).join('\n')
          ).join('\n');

          return cssString.push(`${selector} {\n${cssVariables}\n}`);
        }

        if (colorKey === "dark") {
          const selector = ":root .theme-dark";

          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`
              ).join("\n")
            ).join("\n");

          return cssString.push(`${selector} {\n${cssVariables}\n}`);
        }
      });
      
      return;
    }

 
    const selector = ":root";

    const cssVariables = Object.entries(value)
      .map(([mainKey, mainValue]) =>
        Object.entries(mainValue)
          .map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`
        ).join("\n")
      ).join("\n");

    return cssString.push(`${selector} {\n${cssVariables}\n}`);
    
  });

  return cssString;
};

// .headingxl {
//   font-size: 3rem;
//   font-weight: 700;
//   line-height: 100%;
// }

// class 변환하는 함수
const generateThemeCssClasses = () => {
  const cssString = [];

  Object.entries(theme.classes).forEach(([, value]) => {
    const cssClasses = Object.entries(value)
      .map(([mainKey, mainValue]) => (
        Object.entries(mainValue)
          .map(([subKey, subValue]) => {
            const className = `.${toCssCasting(mainKey)}${toCssCasting(subKey)}`;

            const styleProperties = Object.entries(subValue).map(([styleKey, styleValue]) => (
              `${toCssCasting(styleKey)}: ${styleValue};`
            )).join('\n');

            return `${className} {\n${styleProperties}\n}`;
          }).join('\n')
      )).join('\n');

    cssString.push(cssClasses);
  })

  return cssString;
}


// 파일 생성하는 함수
const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  const classes = generateThemeCssClasses();
  // 클래스는 항상 변수 밑에 선언 되어야 함

  fs.writeFileSync("dist/themes.css", [...variables, ...classes].join("\n"));
}

generateThemeCss();