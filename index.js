import eslintJS from '@eslint/js'
import globals from 'globals'
import love from 'eslint-config-love'
import stylistic from '@stylistic/eslint-plugin'
import tsEslint from 'typescript-eslint'

import * as astroParser from 'astro-eslint-parser'
import epAstro from 'eslint-plugin-astro'
import epSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default [
  eslintJS.configs.recommended,
  stylistic.configs.recommended,
  ...epSvelte.configs.recommended,
  ...epAstro.configs.recommended,

  ...[
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    love,
    {
      languageOptions: {
        parser: tsEslint.parser,
        parserOptions: {
          projectService: true,
          extraFileExtensions: ['.svelte'],
        },
        globals: {
          ...globals.browser
        }
      },
      rules: {
        // opt out of too severe rules from love
        '@typescript-eslint/explicit-function-return-type': 'off', // too much clutter with JSDoc @return Annotations
        '@typescript-eslint/init-declarations': 'off', // uninitialized variables can convey clear meaning and are caught by TS
        '@typescript-eslint/no-magic-numbers': 'off', // magic numbers flags too many false positives in attributes/HTML/CSS
        '@typescript-eslint/prefer-destructuring': 'off', // destructuring is not always helpful
        
        'complexity': ['error', { variant: 'modified', max: 20 }], // 20 is more reasonable for complex codebase
        'eqeqeq': ['error', 'smart'], // allow x == null to catch null and undefined
        'no-param-reassign': ['error', { 'props': false }], // props can be useful for reactivity and default values
        'no-plusplus': ['error', { "allowForLoopAfterthoughts": true }], // plusplus is safe in for loop clauses
        'no-negated-condition': 'off', // flags x != null shorthand
        
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/max-statements-per-line': ['error', {max: 2}],
        '@stylistic/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
      },
    },
  ].map(config => ({...config, ignores:["**/*.astro"]})),

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      // Astro parsing currently broken with projectService: https://github.com/ota-meshi/astro-eslint-parser/issues/331
      // .astro files will only get untyped checks
      parserOptions: {
        projectService: false,
        parser: null
      },
      globals: {
        ...globals.browser
      }
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
        projectService: true,
      }
    },
    rules: {
      'no-useless-assignment': 'off', // false positives in svelte files ($bindable) - caught by svelte-check
      'prefer-const': 'off', // false positives ($state)

      // JSDoc Types are not handled correctly in Svelte files: https://github.com/sveltejs/svelte-eslint-parser/issues/533
      // But these errors will be found by svelte-check
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
    },
  },
]
