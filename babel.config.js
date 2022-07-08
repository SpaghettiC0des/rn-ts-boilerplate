const moduleResolver = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    alias: {
      '@src': ['./src/'],
    },
  },
];

const reanimated = 'react-native-reanimated/plugin';

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [moduleResolver, reanimated],
};
