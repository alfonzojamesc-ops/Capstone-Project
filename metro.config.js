// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.minifierConfig.compress.drop_console = true;

config.resolver.sourceExts.push("cjs", "mjs");
config.resolver.assetExts.push("glb", "gltf");

module.exports = config;
