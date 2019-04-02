import { isString, isArray, isObject } from 'lodash';

export const filtersObjectToQueryString = data => {
  const stringify = Object.keys(data).reduce((totalAccu, queryKey, index) => {
      const lastQuery = index === Object.keys(data).length - 1;
      if(isString(data[queryKey])) {
        return `${totalAccu}${queryKey}=${data[queryKey]}${lastQuery ? '' : '&'}`
      } else if (isObject(data[queryKey]) && !isArray(data[queryKey])) {
        return `${totalAccu}${queryKey}=${data[queryKey].value}${lastQuery ? '' : '&'}`
      } else if (isArray(data[queryKey])) {
        const queryArray = data[queryKey];
        const stringifiedArray = queryArray.reduce((accuArray, obj, index) => {
          const lastValue = index === queryArray.length - 1;
          return `${accuArray}${obj.value}${lastValue ? '' : ','}`
        }, '')
        return `${totalAccu}${queryKey}=${stringifiedArray}${lastQuery ? '' : '&'}`
      }
    }, '')
    return stringify;
}