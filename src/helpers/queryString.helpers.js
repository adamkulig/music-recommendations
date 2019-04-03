import { isString, isArray, isPlainObject, size } from 'lodash';

export const objectToQueryString = data => Object.keys(data).reduce((totalAccu, queryKey, index) => {
  const isLast = index === size(data) - 1;
  const end = isLast ? '' : '&';
  const i = data[queryKey];
  if (isString(i)) {
    return `${totalAccu}${queryKey}=${i}${end}`
  } else if (isPlainObject(i)) {
    return `${totalAccu}${queryKey}=${i.value}${end}`
  } else if (isArray(i)) {
    const stringifiedOptions = combineMultipleOptions(i)
    return `${totalAccu}${queryKey}=${stringifiedOptions}${end}`
  } else {
    return totalAccu;
  }
}, '')

const combineMultipleOptions = data => data.reduce((accuArray, obj, index) => {
  const isLast = index === size(data) - 1;
  const end = isLast ? '' : ',';
  return `${accuArray}${obj.value}${end}`
}, '')