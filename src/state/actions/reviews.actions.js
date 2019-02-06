import history from '../../history';
import routes from '../../variables/routes';
import { toastr } from 'react-redux-toastr';
import messages from '../../variables/messages';

const ACTIONS = {
    CREATE_RECOMMENDATION: 'CREATE_RECOMMENDATION',
    CREATE_RECOMMENDATION_ERROR: 'CREATE_RECOMMENDATION_ERROR'
  }
  
  // { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
  const createRecommendation = data => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { displayName } = getState().firebase.profile
    const newReco = {
      ...data,
      country: data.country.label,
      rating: data.rating.label,
      genres: Object.assign({}, ...data.genres.map(item => ({[item.label]: item.value }))),
      likes: {},
      user: displayName,
      createdAt: new Date()
    }
    // firestore.collection('recommendations').add(newReco).then(() => {
      //   dispatch({
        //     type: ACTIONS.CREATE_RECOMMENDATION,
        //     payload: data
        //   })
        // }).catch((error) => {
          //   dispatch({
            //     type: ACTIONS.CREATE_RECOMMENDATION_ERROR,
            //     error
            //   })
            // })
    firestore.collection('recommendations').add(newReco)
    history.push(routes.Main)
    toastr.success(messages.toastrSuccess, messages.toastrSuccessNewRecoAdded)
  }
  
  export { ACTIONS, createRecommendation };
  