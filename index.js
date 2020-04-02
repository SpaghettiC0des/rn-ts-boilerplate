import App from './App';
import {Navigation} from 'react-native-navigation';

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
