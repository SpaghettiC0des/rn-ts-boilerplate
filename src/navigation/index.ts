import {Navigation} from 'react-native-navigation';
import App from 'containers/App';
import registerScreens from 'react-native-navigation-register-screens';

registerScreens([App]);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'MainScreen',
      },
    },
  });
});
