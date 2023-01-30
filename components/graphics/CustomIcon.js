import React, { useEffect, useState } from "react";

import getSVGData from "./get-svg-data";

import svgFilePath from "./ncma-circular-logomark-black.svg";

// Based on original Payload CMS Icon component
// https://github.com/payloadcms/payload/blob/master/src/admin/components/graphics/Icon/index.tsx

const css = `
  .graphic-icon path {
    fill: var(--theme-elevation-1000);
  }
`;

// Original width and height were 25
const size = "50";

const CustomIcon = () => {
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
        width={size}
        height={size}
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

export default CustomIcon;
