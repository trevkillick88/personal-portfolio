import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import cspellConfigs from '@cspell/eslint-plugin/configs';
import jsdoc from 'eslint-plugin-jsdoc';

export default tseslint.config(
    { ignores: ['dist', 'build'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.strict, prettier,jsxA11y.flatConfigs.strict,react.configs.flat.all,cspellConfigs.recommended, jsdoc.configs['flat/recommended'],],
        settings: {
            react: {
              version: "detect",
            }
        },
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
            //-- A11y Config Rules
            'jsx-a11y/label-has-associated-control': 'error',
            'jsx-a11y/control-has-associated-label': 'error',
            //-- React Rules
            "react/react-in-jsx-scope": "off", //-- Fix from v17+
            "react/jsx-max-depth": "off", //-- Static site so not worried about this
            "react/jsx-no-literals": "off", //-- Static site so not worried about this
            "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
            "react/jsx-one-expression-per-line": "off",
            "react/jsx-newline": "off",
            "react/jsx-props-no-spreading": ["error", { //-- Prop Spreading exception for SVG in Navigation
                "html": "enforce",
                "custom": "enforce",
                "explicitSpread": "enforce",
                "exceptions": ["svg"]
            }],
            "react/forbid-component-props": ["error", { 
                "forbid": 
                [
                    {
                        "propName": "className",
                        "allowedFor": ["FontAwesomeIcon","Link","Bars3Icon","MenuItem","MenuItems","Dialog","Menu","DialogPanel","XMarkIcon"],
                        "message": "Avoid using Link except FontAwesomeIcon, Link"
                    }
                ]
            }],
             //-- TypeScript Rules
             "@typescript-eslint/explicit-module-boundary-types": ["error"], // Ensure explicit types on exported functions
             "@typescript-eslint/no-explicit-any": ["error"], // Disallow `any` type unless explicitly justified
             "@typescript-eslint/no-inferrable-types": ["error"],
            //-- CSpell Rules
            '@cspell/spellchecker': ['warn', { customWordListFile: "words.txt"}]
        },
    },
)
