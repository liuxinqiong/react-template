module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  rules: {
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'no-param-reassign': [2, { props: false }],
    'no-continue': 'off',
  },
};
