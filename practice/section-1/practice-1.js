'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for (let i = 0; i < collectionA.length; i++) {
    if (collectionB.indexOf(collectionA[i]) !== -1) {
      // 判断集合A中的元素是否在B中存在，使用求下标的方法，如果不存在的话，下标为-1
      result.push(collectionA[i]);
    }
  }
  return result;
}
