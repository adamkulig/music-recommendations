import { get } from 'lodash';

export const getRecoById = (state, id) => 
  get(state, `firestore.data.recommendations[${id}]`, null);

export const getAllRecos = state => 
  get(state, 'firestore.ordered.recommendations', []);
