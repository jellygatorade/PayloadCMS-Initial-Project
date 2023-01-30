import React, { useEffect, useState } from "react";

import getSVGData from "./get-svg-data";

import svgFilePath from "./ncma-logomark-black.svg";

// Based on original Payload CMS Logo component
// https://github.com/payloadcms/payload/blob/master/src/admin/components/graphics/Logo/index.tsx

const css = `
  .graphic-icon path {
    fill: var(--theme-elevation-1000);
  }
`;

// Original width and height were 180 and 50 (for Payload logo)
// Native aspect ratio of ncma logomark is 129:108
const width = "1290";
const height = "1080";

const CustomLogo = () => {
  const [viewBox, setViewBox] = useState("0 0 0 0");
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    fetch(svgFilePath)
      .then((d) => d.text())
      .then((text) => {
        const svgData = getSVGData(text);
        //console.log(svgData);

        setViewBox(svgData.viewBox);
        setPaths(svgData.paths);
      });
  }, []);

  return (
    <div>
      <svg
        width={width / 5}
        height={height / 5}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="graphic-icon"
      >
        <style>{css}</style>
        {paths.map((path, index) => {
          return <path key={index} d={path} />;
        })}
      </svg>
    </div>
  );
};

export default CustomLogo;
