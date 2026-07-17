module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          // Hermes in Expo Go / bundled hermesc does not support native private fields (#).
          // hermes-v0 transpiles them so React Native 0.81 DOM polyfills load correctly.
          unstable_transformProfile: 'hermes-v0',
        },
      ],
    ],
  };
};
