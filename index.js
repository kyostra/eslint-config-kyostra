'use strict';

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        /** Possible Errors
         * https://eslint.org/docs/rules/#possible-errors
         */
        'for-direction': 'error',
        'getter-return': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'warn',
        'no-console': 'warn',
        'no-constant-condition': 'off',
        'no-control-regex': 'off',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'warn',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'off',
        'no-inner-declarations': 'off',
        'no-invalid-regexp': 'warn',
        'no-irregular-whitespace': ['error', { 'skipStrings': true, 'skipComments': true, 'skipRegExps': true, 'skipTemplates': true }],
        'no-obj-calls': 'error',
        'no-regex-spaces': 'warn',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'off',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'warn',
        'no-unsafe-finally': 'warn',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        /** Best Practices
         * https://eslint.org/docs/rules/#best-practices
         */
        'array-callback-return': 'off',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'off',
        'curly': ['error', 'all'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['warn', { 'allowKeywords': true, 'allowPattern': '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' }],
        'eqeqeq': ['error', 'always'],
        'no-case-declarations': 'error',
        'no-empty-function': 'warn',
        'no-empty-pattern': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-floating-decimal': 'error',
        'no-global-assign': 'warn',
        'no-implicit-coercion': 'error',
        'no-multi-spaces': ['error', { 'ignoreEOLComments': true, 'exceptions': { 'Property': false } }],
        'no-multi-str': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-redeclare': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'warn',
        'no-sequences': 'error',
        'no-unused-labels': 'error',
	    'no-useless-concat': 'warn',
	    'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-with': 'error',
        'radix': 'error',
	    'require-await': 'warn',
        'vars-on-top': 'warn',
        'yoda': 'error',

        /** Variables
         * https://eslint.org/docs/rules/#variables
         */
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'error',

        /** Stylistic Issues
         * https://eslint.org/docs/rules/#stylistic-issues
         */
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'camelcase': ['warn', { 'properties': 'never', 'ignoreDestructuring': false }],
        'comma-dangle': ['error', 'never'],
        'comma-style': ['error', 'last'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'func-names': ['warn', 'always'],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
        'no-trailing-spaces': ['error', { 'skipBlankLines': false, 'ignoreComments': false }],
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always', { 'omitLastInOneLineBlock': false }],
        'semi-style': ['error', 'last'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'spaced-comment': ['error', 'always'],

        /** ECMAScript 6
         * https://eslint.org/docs/rules/#ecmascript-6
         */
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'constructor-super': 'warn',
        'generator-star-spacing': ['error', { 'before': true, 'after': true }],
        'no-class-assign': 'warn',
        'no-confusing-arrow': ['error', { 'allowParens': true }],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': ['error', { 'includeExports': false }],
        'no-new-symbol': 'warn',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
	    'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'warn',
        'prefer-arrow-callback': 'error',
        'prefer-const': ['error', { 'destructuring': 'all' }],
        'prefer-rest-params': 'warn',
        'prefer-spread': 'error',
        'prefer-template': 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'both']
    }
};
