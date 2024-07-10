module.exports = {
    root: true,
    env: {
    node: true,
    jest: true
    },
    extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
    ],
    parserOptions: {
    ecmaVersion: 2020
    },
    rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prefer-const': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'RouteConfig' }],
    },
    overrides: [
    {
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
    jest: true
    }
    }
    ]
    };
    