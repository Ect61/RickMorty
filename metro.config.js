const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

let config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

// NativeWind ile yapılandır
config = withNativeWind(config, { input: "./global.css" });

// Reanimated ile yapılandır
config = wrapWithReanimatedMetroConfig(config);

module.exports = config;
