module.exports = {
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:you-dont-need-lodash-underscore/compatible',
    ],
    root: true,
    rules: {
        'camelcase': [2, {'properties': 'never'}],
        'curly': 2,
        'dot-notation': 2,
        'eol-last': 2,
        'eqeqeq': 2,
        'keyword-spacing': 2,
        'no-alert': 2,
        'no-debugger': 2,
        'no-eval': 2,
        'no-multi-spaces': [2, {'ignoreEOLComments': true}],
        'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 0}],
        'no-restricted-globals': 2,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-tabs': 2,
        'no-trailing-spaces': 2,
        'object-curly-newline': [2, {'consistent': true}],
        'one-var': [2, 'consecutive'],
        'padding-line-between-statements': [2, {
            'blankLine': 'always',
            'prev': ['var', 'block', 'block-like', 'multiline-block-like', 'multiline-expression', 'for', 'if'],
            'next': '*'
        }, {
            'blankLine': 'always',
            'prev': '*',
            'next': 'return'
        }],
        'semi': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': 2,
        'template-tag-spacing': 2,
        'vue/html-indent': ['error', 4],
        'yoda': 2
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        'html'
    ]
};
