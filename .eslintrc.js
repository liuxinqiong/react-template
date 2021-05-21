module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'no-param-reassign': [2, { props: false }],
    'no-continue': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          // {
          //   pattern: 'react*', // this group really don't need??
          //   group: 'external',
          //   position: 'before',
          // },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    'react/require-default-props': 'off',
    'no-restricted-syntax': 0, // really need??
    'max-classes-per-file': ['error', 3],
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'lines-between-class-members': ['error', 'always'],
  },
};
