// this file is used to convert exported svg icon files from Figma to React components

import fs from 'fs/promises';
import path from 'path';

const ROOT_FOLDER = './converter/svg/sources';

const svgFiles = await fs.readdir(ROOT_FOLDER);

let strImport = '';

for await (const svgFile of svgFiles) {
  let componentName = svgFile.replace('name=', '').replace('.svg', '');
  componentName = componentName.replace(/-(\w)/g, (match, p1) => {
    return p1.toUpperCase();
  });
  componentName = componentName.replace(/_(\w)/g, (match, p1) => {
    return p1.toUpperCase();
  });
  componentName = componentName.replace(/^(.)/, function (match) {
    return match.toUpperCase();
  });

  componentName = `Icon${componentName}`;

  let data = `import PropTypes from 'prop-types';
  import { SvgIcon } from '@mui/material';

  const ${componentName} = ({ color = '#222222', width = 24, height = 24 }) => {
    width = width.toString();
    height = height.toString();
  
    return (
      <SvgIcon sx={{ width: widthPx, height: heightPx }}>`;

  data = data.replace('widthPx', '`${width}px`');
  data = data.replace('heightPx', '`${height}px`');

  const filePath = path.join(ROOT_FOLDER, svgFile);
  let svgContent = await fs.readFile(filePath, 'utf-8');

  svgContent = svgContent.replace(/fill=(?!"#D9D9D9"|"none"|"white")".*?"(?=\s|\/)/g, 'fill={color}');
  svgContent = svgContent.replaceAll('style="mask-type:alpha"', 'style={{maskType:"alpha"}}');
  svgContent = svgContent.replaceAll('fill-rule', 'fillRule');
  svgContent = svgContent.replaceAll('clip-rule', 'clipRule');
  svgContent = svgContent.replaceAll('clip-path', 'clipPath');
  data += svgContent;

  data += `
  </SvgIcon>);
  };
  
  
  ${componentName}.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  export default ${componentName};`;

  const jsxFile = path.join('./src/v3/components/icons', `${componentName}.jsx`);
  fs.writeFile(jsxFile, data);

  strImport += `export { default as ${componentName}} from './${componentName}';`;
}

const jsFile = path.join('./src/v3/components/icons', `index.js`);
fs.writeFile(jsFile, strImport);