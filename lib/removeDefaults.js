"use strict";
import ForEach from "./ForEach";

import defined from "cesium/Source/Core/defined";
import Matrix4 from "cesium/Source/Core/Matrix4";

/**
 * Remove default values from the glTF. Not exhaustive.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @returns {Object} glTF with default values removed.
 *
 * @private
 */
function removeDefaults(gltf) {
  ForEach.node(gltf, function (node) {
    if (
      defined(node.matrix) &&
      Matrix4.equals(Matrix4.fromArray(node.matrix), Matrix4.IDENTITY)
    ) {
      delete node.matrix;
    }
  });
  ForEach.accessor(gltf, function (accessor) {
    if (accessor.normalized === false) {
      delete accessor.normalized;
    }
  });
  return gltf;
}

export default removeDefaults;
