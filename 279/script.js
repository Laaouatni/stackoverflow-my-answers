const jsonCircles = [
  { x: 68, y: 61, radius: 20,color: "green", label: "0", },
  { x: 361, y: 60, radius: 20, color: "yellow", label: "1", },
  { x: 360, y: 311, radius: 20, color: "red", label: "2", },
  { x: 65, y: 310, radius: 20, color: "orange", label: "3", },
  { x: 112, y: 28, radius: 20, color: "green", label: "4", },
];

const svgContainer = d3.select("body").append("svg");
const circleContainersgGroup = svgContainer.selectAll("g").data(jsonCircles).enter().append("g");
const circles = circleContainersgGroup.append("circle");
const texts = circleContainersgGroup.append("text");

svgContainer.attr("width", 1000).attr("height", 1000);

/* by using this line of code, 
  you refactored the code 
  in a way to not write multiple times 
  the same coordinate on both of them 
*/
circleContainersgGroup.attr("transform", d => `translate(${d.x}, ${d.y})`);

/* Circle Attributes */
circles
  .attr("r", d => d.radius)
  .attr("fill", d => d.color);

texts
  .text(d => d.label)
  .attr("text-anchor", "middle")              // center X svg
  .attr("dominant-baseline", "middle")        // center Y svg
  .attr("fill", "white");