module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  rules: {
    'import/no-unresolved': [2, { ignore: ['src'] }],
  },
};
