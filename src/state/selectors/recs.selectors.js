import { get } from 'lodash';

export const getRecs = state => get(state, 'recs.recs');
