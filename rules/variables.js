const preservedMsg = variable => `${variable} 为小程序保留字段，请不要使用`;
const notSupportedMsg = variable => `小程序不支持 ${variable} 变量`;
const restrictedGlobals = [
  { name: 'global', message: preservedMsg('global') },
  { name: 'self', message: preservedMsg('self') },
  { name: 'fetch', message: preservedMsg('fetch') },

  { name: 'window', message: notSupportedMsg('window') },
  { name: 'document', message: notSupportedMsg('document') },
  { name: 'location', message: notSupportedMsg('location') },
  { name: 'XMLHttpRequest', message: notSupportedMsg('XMLHttpRequest') },
];

module.exports = {
  rules: {
    'no-restricted-globals': ["error"].concat(restrictedGlobals)
  },
  globals: {
    'App': true,
    'Page': true,
    'getApp': true,
    'abridge': true,
    'my': true
  }
};
