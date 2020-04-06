import React from 'react';

import {Navigation} from 'react-native-navigation';
import App from 'containers/App';
import registerScreens from 'react-native-navigation-register-screens';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import store, {rrfProps} from 'redux/store';

registerScreens([App], 'rntsboilerplate', Component => props => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Component {...props} />
    </ReactReduxFirebaseProvider>
  </Provider>
));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: App.screenName,
      },
    },
  });
});
