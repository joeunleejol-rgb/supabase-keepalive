const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const originalRewriteRequestUrl = config.server.rewriteRequestUrl;

config.server.rewriteRequestUrl = (url) => {
  const rewritten = originalRewriteRequestUrl(url);
  if (typeof rewritten !== 'string') {
    return rewritten;
  }

  // Expo defaults to hermes-stable, which leaves RN private fields (#) untransformed.
  // Hermes in Expo Go / bundled hermesc still needs hermes-v0 transpilation.
  return rewritten.replace(
    'unstable_transformProfile=hermes-stable',
    'unstable_transformProfile=hermes-v0',
  );
};

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: true,
      inlineRequires: false,
    },
    customTransformOptions: {
      engine: 'hermes',
      unstable_transformProfile: 'hermes-v0',
    },
  }),
};

module.exports = config;
