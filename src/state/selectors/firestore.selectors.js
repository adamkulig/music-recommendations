import { get } from 'lodash';

export const getRecById = (state, id) => 
  get(state, `firestore.data.recommendations[${id}]`, null);

export const getAllRecs = state => 
  get(state, 'firestore.ordered.recommendations', []);

export const getAllUsers = state => 
  get(state, 'firestore.data.users');
