import * as js from '@eslint/js';
import * as globals from 'globals';
import * as eslintReact from 'eslint-plugin-react';
import * as eslintReactHooks from 'eslint-plugin-react-hooks';
import * as eslintReactRefresh from 'eslint-plugin-react-refresh';
import * as prettierPlugin from 'eslint-plugin-prettier';
import * as eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default js.configs(
    {
        ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
        plugins: {
            react: eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin
        },
        rules: {}
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020
            }
        }
    },
    {
        files: ['**/*.jsx'],
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prefer-const': 'error',
            'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
            'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
            'react/self-closing-comp': ['error', { component: true, html: true }],
            'max-lines': ['warn', { max: 124 }]
        }
    }
);
