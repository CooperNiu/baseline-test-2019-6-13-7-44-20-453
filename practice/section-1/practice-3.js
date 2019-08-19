'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  for (let i = 0; i < collectionA.length; i++) {
    if (objectB.value.indexOf(collectionA[i]) !== -1) {
      result.push(collectionA[i]);
    }
  }
  return result;
}
