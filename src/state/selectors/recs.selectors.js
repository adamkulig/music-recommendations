import { get } from 'lodash';

export const getRecs = state => get(state, 'recs');
export const getAllRecs = state => get(state, 'allRecs');
export const getRec = state => get(state, 'rec');
