import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'

export default tseslint.config(
    { ignores: ['dist', 'build'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier,jsxA11y.flatConfigs.strict,react.configs.flat.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'jsx-a11y/label-has-associated-control': 'error',
            'jsx-a11y/control-has-associated-label': 'error',
        },
    },
)
