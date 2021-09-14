/*eslint-disable global-require*/
"use strict";
import getStatistics from "./lib/getStatistics";
import glbToGltf from "./lib/glbToGltf";
import gltfToGlb from "./lib/gltfToGlb";
import processGlb from "./lib/processGlb";
import processGltf from "./lib/processGltf";
import removeExtension from "./lib/removeExtension";

export default {
  getStatistics,
  glbToGltf,
  gltfToGlb,
  processGlb,
  processGltf,
  removeExtension,
};
