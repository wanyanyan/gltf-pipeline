"use strict";
import ForEach from "./ForEach";

import defined from "cesium/Source/Core/defined";

/**
 * Iterate through the objects within the glTF and delete their pipeline extras object.
 *
 * @param {Object} gltf A javascript object containing a glTF asset.
 * @returns {Object} glTF with no pipeline extras.
 *
 * @private
 */
function removePipelineExtras(gltf) {
  ForEach.shader(gltf, function (shader) {
    removeExtras(shader);
  });
  ForEach.buffer(gltf, function (buffer) {
    removeExtras(buffer);
  });
  ForEach.image(gltf, function (image) {
    removeExtras(image);
  });

  removeExtras(gltf);

  return gltf;
}

function removeExtras(object) {
  if (!defined(object.extras)) {
    return;
  }

  if (defined(object.extras._pipeline)) {
    delete object.extras._pipeline;
  }

  if (Object.keys(object.extras).length === 0) {
    delete object.extras;
  }
}

export default removePipelineExtras;
