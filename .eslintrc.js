module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['prettier', 'vue'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        jsxSingleQuote: true,
        singleQuote: true,
        disableLanguages: [],
        jsxBracketSameLine: true
      }
    ],
    'func-names': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'nonblock-statement-body-position': ['error', 'any'],
    curly: ['error', 'multi'],
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: []
      }
    ],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'cell', 'item', 'val', 'v', 'e', 'event']
      }
    ],
    'spaced-comment': ['error', 'always'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-multi-assign': 'off',
    'no-underscore-dangle': ['error', { allow: ['_this'] }],
    'class-methods-use-this': 'off',
    radix: ['error', 'as-needed'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.vue']
      },
      alias: {
        map: [
          ['@', '../MedViewer/src'],
          ['@srcModules', '../MedViewer/node_modules']
        ],
        extensions: ['.js', '.vue']
      }
    }
  }
};
