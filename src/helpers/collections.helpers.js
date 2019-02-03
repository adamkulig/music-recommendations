import { reduce, trimEnd, chain, value, _ } from 'lodash';

// export const collectionToString = collection => _
//   .chain(collection)
//   .reduce((accu, item) => accu.concat(`${item}, `),'')
//   .trimEnd(', ')
//   .value();

export const collectionToString = collection => {
  let string;
  string = reduce(collection, (accu, item) => accu.concat(`${item}, `),'');
  string = trimEnd(string, ', ');
  return string;
}
