'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for (let i = 0; i < collectionA.length; i++) {
    if (collectionB[0].indexOf(collectionA[i]) !== -1) {
      result.push(collectionA[i]);
    }
  }
  return result;
}
