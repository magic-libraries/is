module.exports = {
  state: {
    logo: '/img/logo.png',
    logotext: 'is',
    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#require', text: 'require' },
      { to: '/#usage', text: 'usage' },
      { to: '/#types', text: 'types' },
      { to: '/#source', text: 'source' },
    ],
  },
  lib: {
    IS: require.resolve('../src'),
  },
}
