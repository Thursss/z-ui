module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    es6: true,
  },
  // 一个配置文件可以被基础配置中的已启用的规则继承。
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // 自定义全局变量
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    _: true,
    $: true,
  },
  // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
  // "parser": "@typescript-eslint/parser",
  // 配置解析器支持的语法
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
  // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
  plugins: [
    'react',
    'prettier',
    // "@typescript-eslint"
  ],
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    'react/prop-types': 0, //防止在react组件定义中缺少props验证
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-undef': 0,
    'prettier/prettier': 0,
    'react/self-closing-comp': 0,
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_|^err|^ev', // _xxx, err, error, ev, event
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    semi: 1,
    'no-debugger': 1,
    'no-empty-function': 1, //禁止空函数
    'no-unused-vars': 1, //禁止出现未使用过的变量
    eqeqeq: 2,
    'no-multi-spaces': 2, //禁止使用多个空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-in-parens': 2, //强制在圆括号内使用一致的空格
    'no-var': 2, //要求使用 let 或 const 而不是 var,
    'no-useless-escape': 2,
    'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['antd-mobile'] }],
  },
};
