import { get } from 'lodash';

export const getRecoById = (state, id) => 
  get(state, `firestore.data.recommendations[${id}]`, null);

export const getAllRecos = state => 
  get(state, 'firestore.ordered.recommendations', []);

export const getAllUsers = state => 
  get(state, 'firestore.data.users');
