import _ from 'lodash';

export const collectionToString = collection => _
  .chain(collection)
  .reduce((accu, item) => accu.concat(`${item}, `),'')
  .trimEnd(', ')
  .value();
