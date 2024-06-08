module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended'
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'src/components/ui/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh', 'simple-import-sort', 'import', 'prettier'],
  rules: {
    'no-param-reassign': 'off',
    /*Import*/
    'import/first': 'error',
    'import/extensions': 'off',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages:
          ['^react', '^@?\\w'],
          // Alias imports:
          ['^~(([\\/.]?\\w)|assets|test-utils)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$']
        ]
      }
    ],

    /*React*/
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-props-no-spreading': 'off',

    /* Console*/
    'no-console': ['warn', { allow: ['info', 'error'] }],

    /*Typescript*/
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ]
  }
};
