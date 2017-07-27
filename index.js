module.exports = {
  plugins: ["appx"],
  env: {
    "appx/appx": true,
  },
  rules: {
    "appx/no-appx-globals": 'error',
  },
};
