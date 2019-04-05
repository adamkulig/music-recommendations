import { isString, isArray, isPlainObject, size } from 'lodash';

export const filtersToQueryString = data => Object.keys(data).reduce((accu, key, index) => {
  const isLast = index === size(data) - 1;
  const end = isLast ? '' : '&';
  if (isString(data[key])) {
    return `${accu}${key}=${data[key]}${end}`
  } else if (isPlainObject(data[key])) {
    return `${accu}${key}=${data[key].value}${end}`
  } else if (isArray(data[key])) {
    const stringifiedOptions = combineMultipleOptions(data[key])
    return `${accu}${key}=${stringifiedOptions}${end}`
  } 
  return accu;
}, '')

const combineMultipleOptions = data => data.reduce((accuArray, obj, index) => {
  const isLast = index === size(data) - 1;
  const end = isLast ? '' : ',';
  return `${accuArray}${obj.value}${end}`
}, '')

// export const filtersToObject = data => reduce(data, (accu, current, key) => {
//   if (isString(current)) {
//     return { ...accu, [key]: current }
//   } else if (isPlainObject(current)) {
//     return { ...accu, [key]: current.value }
//   } else if (isArray(current)) {
//     const array = reduce(current, (accu, i) => {
//       return [ ...accu, i.value]
//     }, [])
//   return { ...accu, [key]: array } 
//   } 
//   return accu;
// }, {})
