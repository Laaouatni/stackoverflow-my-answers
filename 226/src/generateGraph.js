import generateXYcoords from "./generateXYcoords.js";
import generateXYpoints from './generateXYpoints.js';

export default function generateGraph(formula, num) {
  generateXYpoints(
    generateXYcoords(formula, num)
  );
}