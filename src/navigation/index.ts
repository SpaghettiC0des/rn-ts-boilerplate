import {Navigation} from 'react-native-navigation';
import App from 'containers/App';

Navigation.registerComponent('MainScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'MainScreen',
      },
    },
  });
});
