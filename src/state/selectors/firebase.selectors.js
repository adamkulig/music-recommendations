import { get } from 'lodash';

export const getAuth = state => get(state, 'firebase.auth');
export const getProfile = state => get(state, 'firebase.profile');
