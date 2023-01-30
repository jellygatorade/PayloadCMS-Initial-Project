const getSVGData = (svgtext) => {
  const element = document.createElement("div");
  element.innerHTML = svgtext;

  const svgElement = element.getElementsByTagName("svg")[0]; // only for the first svg element in the file
  let pathElements = svgElement.getElementsByTagName("path");
  pathElements = Array.prototype.slice.call(pathElements); // convert HTMLCollection to Array

  const viewBox = svgElement.getAttribute("viewBox");
  const svgPaths = pathElements.map((path) => path.getAttribute("d"));

  return {
    viewBox: viewBox,
    paths: svgPaths,
  };
};

export default getSVGData;
