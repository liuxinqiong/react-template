module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  rules: {
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'no-param-reassign': [2, { props: false }],
    'no-continue': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'internal', 'external', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
};
