import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import firebase from '@react-native-firebase/app';
import {
  firebaseReducer,
  ReactReduxFirebaseConfig,
  ReactReduxFirebaseProviderProps,
} from 'react-redux-firebase';
// import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'; <- needed if using firestore

const rrfConfig: Partial<ReactReduxFirebaseConfig> = {
  // This is required to disable redirect handling (which uses http)
  // since it is not supported in react-native
  enableRedirectHandling: false,
};

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    // firestore: firestoreReducer, <- needed if using firestore
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const rrfProps: ReactReduxFirebaseProviderProps = {
  initializeAuth: false,
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance, <- needed if using firestore
};

export default store;
