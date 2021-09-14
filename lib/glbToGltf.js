"use strict";
import parseGlb from "./parseGlb";
import processGltf from "./processGltf";

/**
 * Convert a glb to glTF.
 *
 * @param {Buffer} glb A buffer containing the glb contents.
 * @param {Object} [options] The same options object as {@link processGltf}
 * @returns {Promise} A promise that resolves to an object containing the glTF and a dictionary containing separate resources.
 */
function glbToGltf(glb, options) {
  const gltf = parseGlb(glb);
  return processGltf(gltf, options);
}

export default glbToGltf;
