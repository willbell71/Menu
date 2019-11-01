module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-no-undef': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-key': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/sort-prop-types': 'error',
    'react/self-closing-comp': 'error',
    'react/require-default-props': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/prop-types': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/prefer-read-only-props': 'error',
    'react/no-unused-state': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-multi-comp': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-deprecated': 'error',
    'react/no-array-index-key': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // eslint rules - https://eslint.org/docs/rules/
    'arrow-parens': ['error', 'as-needed'],
    // 'valid-jsdoc': 'error',
    'no-console': 'error',
    'no-extra-semi': 'error',
    'semi': ['error', 'always'],
    'no-unreachable': 'error',
    'default-case': 'error',
    'no-shadow': 'error',
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 140],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'flatTernaryExpressions': true
    }],
    'no-unused-vars': 'off',

    // eslint ts rules - https://github.com/bradzacher/eslint-plugin-typescript
    '@typescript-eslint/typedef': ['error', {
      'arrayDestructuring': true,
      'arrowParameter': true,
      'memberVariableDeclaration': true,
      'objectDestructuring': true,
      'parameter': true,
      'propertyDeclaration': true,
      'variableDeclaration': true
    }],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/member-ordering': ['error', {classes: ['constructor', 'private-instance-method', 'public-instance-method']}],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
};